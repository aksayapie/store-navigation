import React from 'react';
import './App.scss';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="app">
        {/* Everything goes in here */}
      </div>
    </AppProvider>
  );
}

export default App;
