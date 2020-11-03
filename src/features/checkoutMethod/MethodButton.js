import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@shopify/polaris/';
import { FaAngleRight } from 'react-icons/fa';
import { ShopcodesMajor, MobileMajor } from '@shopify/polaris-icons';

function MethodButton({
  setCheckoutTypeProp, titleProp, contentProp, checkoutTypeProp, iconNameProp,
}) {
  const updateScanType = (type) => {
    setCheckoutTypeProp(type);
  };

  return (
    <div>
      <Button onClick={() => updateScanType(checkoutTypeProp)}>
        {iconNameProp === 'ShopcodesMajor' ? (
          <Icon source={ShopcodesMajor} />
        ) : null}
        {iconNameProp === 'MobileMajor' ? (
          <Icon source={MobileMajor} />
        ) : null}
        <h3>{titleProp}</h3>
        <h4>{contentProp}</h4>
        <FaAngleRight />
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
