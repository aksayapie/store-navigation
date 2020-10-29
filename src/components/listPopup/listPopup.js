import React, { useState } from 'react';
import Sheet from 'react-modal-sheet';
import { Heading } from '@shopify/polaris/';
import useWindowDimensions from '../../util/windowDimensions';
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
          <Sheet.Header />
          <Heading>My Shopping List</Heading>
        </Sheet.Header>
        <br />
        <hr />
        <br />
        <Sheet.Content>
          whatever
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default ListPopup;
