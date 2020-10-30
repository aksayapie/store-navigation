import React from 'react';
import './ShopMode.scss';
import ShopModeButton from './ShopModeButton';

const ShopMode = () => (
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
    />
    <ShopModeButton
      shopModeProp="safe"
      headerProp="Avoid Crowds"
      bodyProp="Shows the path with the least amount of foot traffic"
    />
  </div>
);

export default ShopMode;
