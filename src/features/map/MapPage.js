import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectPath, selectItems, selectCurrentItem, setCurrentItem, scanItem,
} from './mapSlice';
import Directions from '../directions/Directions';
import Map from './Map';

const MapPage = () => {
  const dispatch = useDispatch();
  const path = useSelector(selectPath);
  const items = useSelector(selectItems);
  const currentItem = useSelector(selectCurrentItem);

  const onScan = (currentScanningItem) => {
    dispatch(scanItem(currentScanningItem.id));
  };

  // set first item to navigate to from items array
  useEffect(() => {
    if (items) dispatch(setCurrentItem(items[0]));
  }, []);

  return (
    <>
      {currentItem && (
        <Directions
          currentItem={currentItem}
          onScan={onScan}
        />
      )}
      <Map path={path} items={items} />
    </>
  );
};
export default MapPage;
