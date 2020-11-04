import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrentItem, selectShoppingList, selectRemainingItemsCount, calculateShelfPolygons,
} from './mapSlice';
import RouteDirecton from './routeDirection/RouteDirection';
import CheckoutDirection from './checkoutDirection/CheckoutDirection';
import Map from './Map';

const MapPage = () => {
  const dispatch = useDispatch();
  const { path, shelfPolygons } = useSelector((state) => state.map);
  const { items } = useSelector((state) => state.itemList);
  const shoppingList = useSelector(selectShoppingList);
  const currentItem = useSelector(selectCurrentItem);
  const remainingItemsInShoppingListCount = useSelector(selectRemainingItemsCount);

  useEffect(() => {
    if (items) dispatch(calculateShelfPolygons(items));
  }, []);

  return (
    <>
      {currentItem && (
        <RouteDirecton currentItem={currentItem} />
      )}
      {
        !currentItem && remainingItemsInShoppingListCount === 0 && <CheckoutDirection />
      }
      <Map path={path} shelfPolygons={shelfPolygons} shoppingList={shoppingList} />
    </>
  );
};
export default MapPage;
