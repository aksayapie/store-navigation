import React, { useState, useCallback } from 'react';
import Sheet from 'react-modal-sheet';
import {
  Button, ButtonGroup, DisplayText, Modal, Stack, TextContainer,
} from '@shopify/polaris/';
import { AiOutlinePlus, AiOutlineScan } from 'react-icons/ai';
import useWindowDimensions from '../../util/windowDimensions';
import ShoppingList from '../../features/ShoppingList/ShoppingList';
import './listPopup.scss';

const ListPopup = () => {
  const [isOpen, setOpen] = useState(true);
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
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
    >
      <Sheet.Container>
        <Sheet.Header>
          <div className="popupheader">
            <Sheet.Header />
            <Stack>
              <DisplayText size="large" element="h1">
                My Shopping List
              </DisplayText>
              <ButtonGroup>
                <Button
                  textAlign="center"
                  size="slim"
                >
                  <AiOutlinePlus />
                  <p className="smallButtonText">
                    Add Item
                  </p>
                </Button>
                <Button
                  textAlign="center"
                  size="slim"
                >
                  <AiOutlineScan />
                  <p className="smallButtonText">
                    Scan Item
                  </p>
                </Button>
              </ButtonGroup>
            </Stack>
          </div>
        </Sheet.Header>
        <br />
        <hr className="style-six" />
        <br />
        <Sheet.Content>
          <div className="popupcontainer">
            <div className="popupbody">
              <div className="list">
                <ShoppingList />
              </div>
              <div className="buttons">
                <Button primary fullWidth size="slim">
                  Proceed to Checkout
                </Button>

                <div>
                  <Modal
                    activator={(
                      <Button fullWidth size="slim" onClick={handleChange}>
                        Exit Shopping
                      </Button>
                    )}
                    open={active}
                    onClose={handleChange}
                    primaryAction={{
                      content: 'Confirm',
                      onAction: handleChange,
                    }}
                    secondaryActions={[
                      {
                        content: 'Cancel',
                        onAction: handleChange,
                      },
                    ]}
                  >
                    <Modal.Section>
                      <TextContainer>
                        <p>Are you sure you want to end your shopping trip?</p>
                      </TextContainer>
                    </Modal.Section>
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