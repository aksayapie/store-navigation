import React from 'react';
import './App.scss';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import ListPopup from './components/listpopup/listPopup';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="app">
        <ListPopup />
      </div>
    </AppProvider>
  );
}

export default App;
