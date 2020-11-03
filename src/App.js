import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import FlowContainer from './features/flowContainer/FlowContainer';
import MapPage from './features/map/MapPage';
import ScanPage from './features/scan/ScanPage';
import FrontPageShoppingList from './features/ShoppingList/FrontPageShoppingList';
import MainNavBar from './components/mainNavBar/MainNavBar';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="app" id="app">
        <MainNavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* Wrap your page component in a <Route> component and it will display
              when the url matches the path. */}
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/welcome">
            <FlowContainer />
          </Route>
          <Route path="/scan">
            <ScanPage />
          </Route>
          <Route path="/">
            <FrontPageShoppingList />
          </Route>
        </Switch>
      </div>
    </AppProvider>
  );
}

export default App;
