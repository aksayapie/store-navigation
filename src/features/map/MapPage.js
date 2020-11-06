import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '@shopify/polaris';
import {
  calculateShelfPolygons,
  fetchPath,
  setPathUpdated,
} from './mapSlice';
import RouteDirecton from './routeDirection/RouteDirection';
import CheckoutDirection from './checkoutDirection/CheckoutDirection';
import Map from './Map';
import {
  setRequestNewPath,
  addStepsToShoppingList,
} from '../ShoppingList/shoppingListSlice';

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
  const { items, itemsByName, itemsLoaded } = useSelector((state) => state.itemList);
  const {
    items: shoppingList, shoppingListGenerated, requestNewPath,
  } = useSelector((state) => state.shoppingList);
  const { currShopMode } = useSelector((state) => state.shopMode);

  useEffect(() => {
    if (itemsLoaded) {
      dispatch(calculateShelfPolygons(items));
    }
  }, [itemsLoaded]);

  useEffect(() => {
    if (shoppingListGenerated) dispatch(fetchPath(currShopMode, itemsByName, shoppingList));
  }, [shoppingListGenerated]);

  useEffect(() => {
    if (requestNewPath) {
      dispatch(fetchPath(currShopMode, itemsByName, shoppingList));
      setRequestNewPath(false);
    }
  }, [requestNewPath]);

  useEffect(() => {
    if (pathUpdated) {
      dispatch(addStepsToShoppingList(path));
      dispatch(setPathUpdated(false));
    }
  }, [pathUpdated]);

  return mapLoading ? <Spinner accessibilityLabel="Spinner example" size="large" color="teal" /> : (
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
