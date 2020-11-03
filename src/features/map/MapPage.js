import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectPath, selectCurrentItem, setCurrentItem, scanItem, selectShoppingList, selectAllItems,
} from './mapSlice';
import Directions from '../directions/Directions';
import Map from './Map';

const MapPage = () => {
  const dispatch = useDispatch();
  const path = useSelector(selectPath);
  const shoppingList = useSelector(selectShoppingList);
  const currentItem = useSelector(selectCurrentItem);
  const allItems = useSelector(selectAllItems);

  const onScan = (currentScanningItem) => {
    dispatch(scanItem(currentScanningItem.id));
  };

  // set first item for navigation
  useEffect(() => {
    // wait for items to populate from API
    if (allItems && shoppingList) {
      dispatch(setCurrentItem(shoppingList[0].id));
    }
  }, [allItems]);

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
