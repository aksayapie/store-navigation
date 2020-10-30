import React, { useState } from 'react';
import './Welcome.scss';
import { Button } from '@shopify/polaris';
import LocationSelect from './LocationSelect';

const ShopMode = () => {
  const [storeName, setStoreName] = useState(' Chicago Clybourne');
  const toNextScreen = () => {
    console.log('button clicked');
  };
  const updateStore = (newStore) => {
    setStoreName(newStore);
  };
  return (
    <div className="welcome-container">
      <h1>Welcome to your In-store experience</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </h2>
      <h2>
        My store is
        {storeName}
        <LocationSelect updateStoreProp={updateStore} />
      </h2>
      <Button primary onClick={toNextScreen}>Continue</Button>
    </div>
  );
};

export default ShopMode;
