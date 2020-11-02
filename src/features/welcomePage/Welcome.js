import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.scss';
import { Button } from '@shopify/polaris';
import LocationSelect from './LocationSelect';

const Welcome = ({
  setShowWelcomeProp, setShowCovidProp, storeNameProp, setStoreNameProp,
}) => {
  const toNextScreen = () => {
    setShowWelcomeProp(false);
    setShowCovidProp(true);
  };

  const updateStore = (newStore) => {
    setStoreNameProp(newStore);
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to your In-store experience</h1>
      <h2>
        Our in-store navigator will help you locate items within
        our stores based on how you prefer to shop.
      </h2>
      <h2>
        My store is
        <b>{storeNameProp}</b>
        {/* opens modal for user to change their city */}
        <LocationSelect updateStoreProp={updateStore} />
      </h2>
      <Button primary onClick={toNextScreen}>Continue</Button>
    </div>
  );
};

Welcome.propTypes = {
  setShowWelcomeProp: PropTypes.func.isRequired,
  setShowCovidProp: PropTypes.func.isRequired,
  storeNameProp: PropTypes.string.isRequired,
  setStoreNameProp: PropTypes.func.isRequired,
};

export default Welcome;
