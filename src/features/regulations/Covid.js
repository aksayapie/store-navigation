import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@shopify/polaris';
import './Covid.scss';

function Covid({ setShowCovidProp, setShowShopModeProp }) {
  const toNextScreen = () => {
    setShowShopModeProp(true);
    setShowCovidProp(false);
  };
  return (
    <div className="content">
      <h1>COVID-19 Policies</h1>
      <h2>
        To protect our members and employees, all Costco members and guests
        must wear a face covering that covers their mouth and nose at all
        times while at Costco.
      </h2>
      <div className="shopping">
        <Button primary onClick={toNextScreen}>I Understand</Button>
      </div>
    </div>
  );
}

Covid.propTypes = {
  setShowShopModeProp: PropTypes.func.isRequired,
  setShowCovidProp: PropTypes.func.isRequired,
};

export default Covid;
