import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrentItem,
  selectRemainingItemsCount,
  calculateShelfPolygons,
  addStepsToShoppingList,
  fetchPath,
} from './mapSlice';
import RouteDirecton from './routeDirection/RouteDirection';
import CheckoutDirection from './checkoutDirection/CheckoutDirection';
import Map from './Map';

const MapPage = () => {
  const dispatch = useDispatch();
  const {
    path, shelfPolygons, aisleNumberCoords, shoppingList,
  } = useSelector((state) => state.map);
  const { items, itemsByName } = useSelector((state) => state.itemList);
  const currentItem = useSelector(selectCurrentItem);
  const remainingItemsInShoppingListCount = useSelector(selectRemainingItemsCount);

  useEffect(() => {
    if (items && items.length > 0) {
      dispatch(calculateShelfPolygons(items));
      dispatch(fetchPath(items, itemsByName));
      dispatch(addStepsToShoppingList());
    }
  }, [items]);

  return (
    <>
      {currentItem && (
        <RouteDirecton currentItem={currentItem} />
      )}
      {
        !currentItem && remainingItemsInShoppingListCount === 0 && <CheckoutDirection />
      }
      <Map
        path={path}
        shelfPolygons={shelfPolygons}
        shoppingList={shoppingList}
        aisleNumberCoords={aisleNumberCoords}
      />
    </>
  );
};
export default MapPage;
