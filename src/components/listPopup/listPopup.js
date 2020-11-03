import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sheet from 'react-modal-sheet';
import {
  Button, ButtonGroup, DisplayText, Stack, Icon,
} from '@shopify/polaris/';
import { MobilePlusMajor, BarcodeMajor, SearchMajor } from '@shopify/polaris-icons';
import Modal from 'react-modal';
import useWindowDimensions from '../../util/windowDimensions';
import ShoppingList from '../../features/ShoppingList/ShoppingList';
import './listPopup.scss';

Modal.setAppElement('#root');

const ListPopup = () => {
  const [isOpen, setOpen] = useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [addModalIsOpen, setAddIsOpen] = React.useState(false);
  const { height } = useWindowDimensions();
  const ref = React.useRef();
  const snapTo = (i) => ref.current?.snapTo(i);

  const closeSequence = () => {
    setOpen(false);
    snapTo(2);
    setOpen(true);
  };

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => closeSequence()}
      snapPoints={[height - height / 10, height / 2, 100]}
      initialSnap={2}
      ref={ref}
      className="sheet"
      id="sheet"
    >
      <Sheet.Container>
        <Sheet.Header>
          <div className="popupheader">
            <Sheet.Header />
            <Stack wrap={false} distribution="equalSpacing" alignment="center">
              <DisplayText size="large" element="h1">
                My Shopping List
              </DisplayText>
              <ButtonGroup>
                <Button textAlign="center" size="slim" onClick={() => setAddIsOpen(true)}>
                  <Icon source={MobilePlusMajor} />
                  <div className="smallButtonText">Add Item</div>
                </Button>
                <Link to="/scan">
                  <Button textAlign="center" size="slim">
                    <Icon source={BarcodeMajor} />
                    <div className="smallButtonText">Scan Item</div>
                  </Button>
                </Link>
              </ButtonGroup>
            </Stack>
            <Modal
              isOpen={addModalIsOpen}
              onRequestClose={() => setAddIsOpen(false)}
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
              <p>How do you want to add a new item?</p>
              <hr className="style-six" />
              <ButtonGroup>
                <Button textAlign="center" size="slim">
                  <Icon source={SearchMajor} />
                  <div className="smallButtonText">Search Item</div>
                </Button>
                <Link to="/scan">
                  <Button textAlign="center" size="slim">
                    <Icon source={BarcodeMajor} />
                    <div className="smallButtonText">Scan Item</div>
                  </Button>
                </Link>
              </ButtonGroup>
            </Modal>
          </div>
        </Sheet.Header>
        <br />
        <hr className="style-six" />
        <br />
        <Sheet.Content>
          <div className="popupcontainer">
            <div className="popupbody">
              <div className="list shopping-item-container">
                <ShoppingList />
              </div>
              <div className="buttons">
                <Button primary fullWidth size="slim">
                  Proceed to Checkout
                </Button>

                <div>
                  <Button fullWidth size="slim" onClick={() => setIsOpen(true)}>
                    Exit Shopping
                  </Button>
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
                    <p>Are you sure you want to end your shopping trip?</p>
                    <hr className="style-six" />
                    <ButtonGroup>
                      <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                      <Link to="/">
                        <Button primary>Confirm</Button>
                      </Link>
                    </ButtonGroup>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default ListPopup;
