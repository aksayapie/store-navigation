import React from 'react';
import { Button } from '@shopify/polaris';
import './ShopMode.scss';
import { FaAngleRight } from 'react-icons/fa';

const ShopMode = () => {
  //  assume our container will have the state variable for shopmode and
  // method to update and we just pass our value into prop method
  let shopMode = 'HI';

  const updateShopMode = (value) => {
    shopMode = value;
    console.log(shopMode);
  };

  return (
    <div className="shop-mode-container">
      <h1 className="bold">Select your shopping experience</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </h2>
      <Button outline onClick={() => updateShopMode('quick')}>
        <h3>Quick Shop</h3>
        <div className="button-text">
          Shows the most efficient path for picking up your items
        </div>
        <FaAngleRight className="button-icon" />
      </Button>
      <Button outline onClick={() => updateShopMode('safe')}>
        <h3>Avoid Crowds</h3>
        <div className="button-text">Shows the path with the least amount of foot traffic</div>
        <FaAngleRight className="button-icon" />
      </Button>
    </div>
  );
};

export default ShopMode;
