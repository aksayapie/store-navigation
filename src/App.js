import React from 'react';
import './App.scss';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import Map from './features/map/Map';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="app">
        <Map />
      </div>
    </AppProvider>
  );
}

export default App;
