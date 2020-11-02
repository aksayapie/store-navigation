import React from 'react';
import './App.scss';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

import Bar from './progressBar/Bar';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div>
        <Bar />
      </div>
    </AppProvider>
  );
}

export default App;
