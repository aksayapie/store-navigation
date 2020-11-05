import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Button, Icon, ButtonGroup } from '@shopify/polaris';
import { MobileCancelMajor } from '@shopify/polaris-icons';
import Modal from 'react-modal';
import { addItemToCart } from '../ShoppingList/shoppingListSlice';
import './ScanPage.scss';

const ScanPage = () => {
  const [control, setControls] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [scannedItem, setItem] = useState(null);
  const [scannedItemName, setItemName] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { items } = useSelector((state) => state.itemList);
  useEffect(() => {
    const scanBarcode = async () => {
      const codeReader = new BrowserMultiFormatReader();

      const previewElem = document.querySelector('video');

      // you can use the controls to stop() the scan or switchTorch() if available
      setControls(
        await codeReader.decodeFromVideoDevice(
          undefined,
          previewElem,
          (result) => {
            // use the result and error values to choose your actions
            // you can also use controls API in this scope like the controls
            // returned from the method.
            if (result) {
              const foundItem = items.find((item) => item.UPC === result.text.substring(1));
              if (foundItem) {
                setItem(foundItem);
                setIsOpen(true);
                setItemName(foundItem.name);
              }
            }
          },
        ),
      );
    };

    scanBarcode();
  }, []);

  const addItem = () => {
    control.stop();
    dispatch(addItemToCart([scannedItem]));
    history.push('/map');
  };

  return (
    <div className="video-container">
      <video id="video" style={{ border: '1px solid gray' }} />
      <div className="rectangle-4" />
      <div className="info">
        <Link to="/map">
          <Button plain onClick={() => control.stop()}>
            <Icon source={MobileCancelMajor} />
          </Button>
        </Link>
        <h1>Scanner</h1>
        <p>Center the viewer over a barcode to add an item to your list</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            zIndex: 3,
            backgroundColor: 'rgba(134,134,134,0.4)',
          },
          content: {
            bottom: '50%',
            top: 'auto',
            fontSize: '1.4em',
            lineHeight: '28px',
          },
        }}
      >
        <p>
          Would you like to add
          {' \''}
          {scannedItemName}
          {'\' '}
          to your cart?
        </p>
        <hr className="style-six" />
        <ButtonGroup>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button primary onClick={() => addItem()}>
            Confirm
          </Button>
        </ButtonGroup>
      </Modal>
    </div>
  );
};

export default ScanPage;
