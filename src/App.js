import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="app">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* Wrap your page component in a <Route> component and it will display
              when the url matches the path. */}
          <Route path="/map">
            <p>Map</p>
            {/* <MapPage /> */}
          </Route>
          <Route path="/welcome">
            <p>Welcome</p>
            {/* <WelcomePage /> */}
          </Route>
          <Route path="/scan">
            <p>Scan</p>
            {/* <ScanPage /> */}
          </Route>
          <Route path="/">
            <p>Shopping List / Account</p>
            {/* <ShoppingListPage /> */}
          </Route>
        </Switch>
      </div>
    </AppProvider>
  );
}

export default App;
