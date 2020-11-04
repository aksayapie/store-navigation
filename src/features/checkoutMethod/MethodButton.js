import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@shopify/polaris/';
import { ShopcodesMajor, MobileMajor, ChevronRightMinor } from '@shopify/polaris-icons';
import './Method.scss';

function MethodButton({
  setCheckoutTypeProp, titleProp, contentProp, checkoutTypeProp, iconNameProp,
}) {
  const updateScanType = (type) => {
    setCheckoutTypeProp(type);
  };

  return (
    <div className="checkout-button-container">
      <Button outline onClick={() => updateScanType(checkoutTypeProp)}>
        <div className="icon">
          <div className="left-icon">
            {iconNameProp === 'ShopcodesMajor' ? (
              <Icon source={ShopcodesMajor} />
            ) : null}
            {iconNameProp === 'MobileMajor' ? (
              <Icon source={MobileMajor} />
            ) : null}
          </div>
        </div>
        <div className="button-text-content">
          <h3>{titleProp}</h3>
          <div className="button-content">{contentProp}</div>
        </div>
        <div className="icon">
          <Icon source={ChevronRightMinor} />
        </div>
      </Button>
    </div>
  );
}

MethodButton.propTypes = {
  setCheckoutTypeProp: PropTypes.func.isRequired,
  titleProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string.isRequired,
  checkoutTypeProp: PropTypes.string.isRequired,
  iconNameProp: PropTypes.string.isRequired,
};

export default MethodButton;
