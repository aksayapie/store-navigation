import React from 'react';
import './App.scss';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

import Covid from './regulations/Covid';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div>
        <Covid />
      </div>
    </AppProvider>
  );
}

export default App;
