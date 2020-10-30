import React from 'react';
import './App.scss';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import ListPopup from './components/listpopup/listPopup';

function App() {
  return (
    <div>
      <AppProvider i18n={enTranslations}>
        <ListPopup />
      </AppProvider>
    </div>
  );
}

export default App;
