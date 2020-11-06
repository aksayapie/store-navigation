import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Spinner } from '@shopify/polaris';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import FlowContainer from './features/flowContainer/FlowContainer';
import MapPage from './features/map/MapPage';
import ScanPage from './features/scan/ScanPage';
import FrontPageShoppingList from './features/ShoppingList/FrontPageShoppingList';
import Method from './features/checkoutMethod/Method';
import MainNavBar from './components/mainNavBar/MainNavBar';
import { fetchItems } from './data/itemListSlice';
import { populateShoppingList } from './features/ShoppingList/shoppingListSlice';

function App() {
  const dispatch = useDispatch();
  const {
    items,
    isLoading: itemsLoading,
    itemsLoaded,
  } = useSelector((state) => state.itemList);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    if (itemsLoaded) dispatch(populateShoppingList(items));
  }, [itemsLoaded]);

  return (
    <AppProvider i18n={enTranslations}>
      <div className="app" id="app">
        <MainNavBar />
        {itemsLoading ? <Spinner accessibilityLabel="Spinner example" size="large" color="teal" /> : (
          <Switch>
            <Route path="/map">
              <MapPage />
            </Route>
            <Route path="/welcome">
              <FlowContainer />
            </Route>
            <Route path="/scan">
              <ScanPage />
            </Route>
            <Route path="/checkout">
              <Method />
            </Route>
            <Route path="/">
              <FrontPageShoppingList />
            </Route>
          </Switch>
        )}
      </div>
    </AppProvider>
  );
}

export default App;
