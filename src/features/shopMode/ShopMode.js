import React from 'react';
//  import '@shopify/polaris/dist/styles.css';
//  import enTranslations from '@shopify/polaris/locales/en.json';
import { Button } from '@shopify/polaris';

const ShopMode = () => {
  //  assume our container will have the state varuiable for shopmode and pass it down as a prop
  let shopMode = 'HI';

  const updateShopMode = (value) => {
    shopMode = value;
    console.log(shopMode);
    return value;
  };

  return (
    <div>
      <h1>Select your shopping experience</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </h2>
      <button type="button" onClick={() => updateShopMode('quick')}>
        Quick Shop
      </button>
      <button type="button" onClick={() => updateShopMode('safe')}>
        Avoid Crowds
      </button>
      <Button outline>Add product</Button>
    </div>
  );
};

export default ShopMode;
