import React, { useState } from 'react';
import Sheet from 'react-modal-sheet';
import { Button, DisplayText } from '@shopify/polaris/';
import useWindowDimensions from '../../util/windowDimensions';
import ShoppingList from '../../features/ShoppingList/ShoppingList';
import './listPopup.scss';

const ListPopup = () => {
  const [isOpen, setOpen] = useState(true);
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
    >
      <Sheet.Container>
        <Sheet.Header>
          <div className="popupheader">
            <Sheet.Header />
            <DisplayText size="extraLarge" element="h1">
              My Shopping List
            </DisplayText>
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
                <br />
                <Button fullWidth size="slim">
                  Exit Shopping
                </Button>
              </div>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default ListPopup;
