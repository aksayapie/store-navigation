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
  const [title, setTitle] = useState('Scanner');
  const [subText, setSubText] = useState(
    'Center the viewer over a barcode to add an item to your list.',
  );
  const [value, setValue] = useState('');
  const [manual, setManual] = useState(false);
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
        await codeReader.decodeFromVideoDevice(undefined, previewElem, (result) => {
          // use the result and error values to choose your actions
          // you can also use controls API in this scope like the controls
          // returned from the method.
          if (result) {
            const foundItem = items.find((item) => item.UPC === result.text.substring(1));
            if (foundItem) {
              setItem(foundItem);
              setIsOpen(true);
              setItemName(foundItem.name);
            } else {
              setTitle('No results');
              setSubText('Try searching for products by name or entering the item number below.');
            }
          }
        }),
      );
    };

    scanBarcode();
  }, []);

  const addItem = () => {
    control.stop();
    dispatch(addItemToCart([scannedItem]));
    history.push('/map');
  };

  const manuallyAddItem = () => {
    const foundItem = items.find((item) => item.UPC === value);
    if (foundItem) {
      setItem(foundItem);
      setIsOpen(true);
      setItemName(foundItem.name);
    } else {
      setTitle('No results');
      setSubText('Try searching for products by name or entering the item number below.');
    }
  };

  return (
    <div className="video-container">
      <video id="video" style={{ border: '1px solid gray' }} />
      <div className="rectangle-4" />
      <div className="info">
        <div className="absolute">
          <Link to="/map">
            <Button plain onClick={() => control.stop()}>
              <Icon source={MobileCancelMajor} />
            </Button>
          </Link>
        </div>
        <h1>{title}</h1>
        <p>{subText}</p>
        <br />
        <div hidden={manual}>
          <ButtonGroup>
            <Button plain onClick={() => setManual(!manual)}>
              Enter Item Number
            </Button>
          </ButtonGroup>
        </div>
        <div className="manualEnter" hidden={!manual}>
          <h2>UPC: </h2>
          <input className="inputField" type="numeric" value={value} onChange={(newValue) => setValue(newValue.target.value)} />
          {' '}
          <Button primary size="slim" onClick={() => manuallyAddItem()}>
            Add to Cart
          </Button>
        </div>
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
          {" '"}
          {scannedItemName}
          {"' "}
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
