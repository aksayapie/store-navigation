import React, { useState } from 'react';
import MethodButton from './MethodButton';
import './Method.scss';

function Method() {
  const [checkoutType, setCheckoutType] = useState(null);
  // console statement for checkoutType which will be used in next screen
  console.log(checkoutType);
  return (
    <div className="checkout-select-container">
      <h1>Choose how you would like to checkout today</h1>
      <div className="single-scan-button">
        <MethodButton
          titleProp="Single Scan Checkout"
          contentProp="Contactless checkout using a provided code at our Single Scan lanes"
          checkoutTypeProp="scan"
          iconNameProp="ShopcodesMajor"
          setCheckoutTypeProp={setCheckoutType}
        />
      </div>
      <div className="mobile-pay-button">
        <MethodButton
          titleProp="Mobile Pay"
          contentProp="Skip the lanes and checkout through your phone"
          checkoutTypeProp="mobile"
          iconNameProp="MobileMajor"
          setCheckoutTypeProp={setCheckoutType}
        />
      </div>
    </div>
  );
}

export default Method;
