import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  calculateShelfPolygons,
  fetchPath,
  setPathUpdated,
} from './mapSlice';
import RouteDirecton from './routeDirection/RouteDirection';
import CheckoutDirection from './checkoutDirection/CheckoutDirection';
import Map from './Map';
import { setShoppingListUpdated, addStepsToShoppingList } from '../ShoppingList/shoppingListSlice';

// const Overlay = () => <div className="loading-overlay"><p>Loading...</p></div>;

const MapPage = () => {
  const dispatch = useDispatch();
  const {
    path,
    shelfPolygons,
    aisleNumberCoords,
    currentPath,
    currentItem,
    isLoading: mapLoading,
    pathUpdated,
  } = useSelector((state) => state.map);
  const { items, itemsByName } = useSelector((state) => state.itemList);
  const { items: shoppingList, shoppingListUpdated } = useSelector((state) => state.shoppingList);

  useEffect(() => {
    if (items && items.length > 0) {
      dispatch(calculateShelfPolygons(items));
    }
  }, [items]);

  useEffect(() => {
    if (shoppingListUpdated) {
      dispatch(fetchPath(itemsByName, shoppingList));
      dispatch(setShoppingListUpdated(false));
    }
  }, [shoppingListUpdated]);

  useEffect(() => {
    if (pathUpdated) {
      dispatch(addStepsToShoppingList(path));
      dispatch(setPathUpdated(false));
    }
  }, [pathUpdated]);

  return mapLoading ? <p>loading...</p> : (
    <>
      {currentItem && currentPath && (
        <RouteDirecton currentItem={currentItem} />
      )}
      {
        !currentItem && <CheckoutDirection />
      }
      <Map
        path={path}
        shelfPolygons={shelfPolygons}
        shoppingList={shoppingList}
        aisleNumberCoords={aisleNumberCoords}
        currentItem={currentItem}
        currentPath={currentPath}
      />
    </>
  );
};
export default MapPage;
