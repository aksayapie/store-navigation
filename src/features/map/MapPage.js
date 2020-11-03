import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectPath, selectCurrentItem, selectShoppingList, selectRemainingItemsCount,
} from './mapSlice';
import RouteDirecton from './routeDirection/RouteDirection';
import CheckoutDirection from './checkoutDirection/CheckoutDirection';
import Map from './Map';

const MapPage = () => {
  const path = useSelector(selectPath);
  const shoppingList = useSelector(selectShoppingList);
  const currentItem = useSelector(selectCurrentItem);
  const remainingItemsInShoppingListCount = useSelector(selectRemainingItemsCount);

  return (
    <>
      {currentItem && (
        <RouteDirecton currentItem={currentItem} />
      )}
      {
        !currentItem && remainingItemsInShoppingListCount === 0 && <CheckoutDirection />
      }
      <Map path={path} shoppingList={shoppingList} />
    </>
  );
};
export default MapPage;
