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
      <div className="main-text">COVID-19 Policies</div>
      <div className="sub-text">
        To protect our members and employees, all Costco members and guests
        must wear a face covering that covers their mouth and nose at all
        times while at Costco.
      </div>
      <div className="shopping">
        <Button onClick={toNextScreen}>I Understand</Button>
      </div>
    </div>
  );
}

Covid.propTypes = {
  setShowShopModeProp: PropTypes.func.isRequired,
  setShowCovidProp: PropTypes.func.isRequired,
};

export default Covid;
