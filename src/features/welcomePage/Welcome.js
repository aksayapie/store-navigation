import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './Welcome.scss';
import { Button } from '@shopify/polaris';
import LocationSelect from './LocationSelect';
import { currLoc } from './locationSelectSlice';

const Welcome = ({
  setShowWelcomeProp, setShowCovidProp,
}) => {
  const toNextScreen = () => {
    setShowWelcomeProp(false);
    setShowCovidProp(true);
  };

  const currentLocation = useSelector(currLoc);

  return (
    <div className="welcome-container">
      <h1>Welcome to your In-store experience</h1>
      <h2>
        Our in-store navigator will help you locate items within
        our stores based on how you prefer to shop.
      </h2>
      <h2>
        My store is
        <b>{currentLocation}</b>
        {/* opens modal for user to change their city */}
        <LocationSelect />
      </h2>
      <Button primary onClick={toNextScreen}>Continue</Button>
    </div>
  );
};

Welcome.propTypes = {
  setShowWelcomeProp: PropTypes.func.isRequired,
  setShowCovidProp: PropTypes.func.isRequired,
};

export default Welcome;
