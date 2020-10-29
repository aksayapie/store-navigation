import React from 'react';
import './App.scss';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
// import Counter from './features/counter/Counter';
import FrontPageShoppingList from './features/ShoppingList/FrontPageShoppingList';

function App() {
  return (
    <div>
      <AppProvider i18n={enTranslations}>
        <FrontPageShoppingList />
      </AppProvider>
    </div>
  );
}

export default App;
