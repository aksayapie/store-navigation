import React from 'react';
import PropTypes from 'prop-types';
import './ShopMode.scss';
import ShopModeButton from './ShopModeButton';

const ShopMode = ({ setShopModeProp }) => (
  <div className="shop-mode-container">
    <h1 className="bold">Select your shopping experience</h1>
    <h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </h2>
    <ShopModeButton
      shopModeProp="quick"
      headerProp="Quick Shop"
      bodyProp="Shows the most efficient path for picking up your items"
      setShopModeProp={setShopModeProp}
    />
    <ShopModeButton
      shopModeProp="safe"
      headerProp="Avoid Crowds"
      bodyProp="Shows the path with the least amount of foot traffic"
      setShopModeProp={setShopModeProp}
    />
  </div>
);

ShopMode.propTypes = {
  setShopModeProp: PropTypes.func.isRequired,
};

export default ShopMode;
