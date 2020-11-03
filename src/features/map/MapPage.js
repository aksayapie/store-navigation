import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectPath, selectCurrentItem, selectShoppingList,
} from './mapSlice';
import Directions from '../directions/Directions';
import Map from './Map';

const MapPage = () => {
  const path = useSelector(selectPath);
  const shoppingList = useSelector(selectShoppingList);
  const currentItem = useSelector(selectCurrentItem);

  return (
    <>
      {currentItem && (
        <Directions currentItem={currentItem} />
      )}
      <Map path={path} shoppingList={shoppingList} />
    </>
  );
};
export default MapPage;
