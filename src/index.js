import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';

import './index.scss';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AppProvider i18n={enTranslations}>
          <App />
        </AppProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
