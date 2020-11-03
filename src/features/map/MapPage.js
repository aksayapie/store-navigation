import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectPath, selectCurrentItem, setCurrentItem, scanItem, selectShoppingList,
} from './mapSlice';
import Directions from '../directions/Directions';
import Map from './Map';

const MapPage = () => {
  const dispatch = useDispatch();
  const path = useSelector(selectPath);
  const shoppingList = useSelector(selectShoppingList);
  const currentItem = useSelector(selectCurrentItem);

  const onScan = (currentScanningItem) => {
    dispatch(scanItem(currentScanningItem.id));
  };

  // set first item to navigate to from shoppingList array
  useEffect(() => {
    if (shoppingList) dispatch(setCurrentItem(shoppingList[0]));
  }, []);

  return (
    <>
      {currentItem && (
        <Directions
          currentItem={currentItem}
          onScan={onScan}
        />
      )}
      <Map path={path} shoppingList={shoppingList} />
    </>
  );
};
export default MapPage;
