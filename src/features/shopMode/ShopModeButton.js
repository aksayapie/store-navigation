import React from 'react';
import { Button } from '@shopify/polaris';
import './ShopMode.scss';
import { FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//  assume our container will have the state variable for shopmode and
// method to update and we just pass our value into prop method

function ShopModeButton({
  shopModeProp, headerProp, bodyProp, setShopModeProp,
}) {
  const updateShopMode = (value) => {
    setShopModeProp(value);
  };

  return (
    <div>
      <Link to="/map" className="link">
        <Button outline onClick={() => updateShopMode(shopModeProp)}>
          <h3>{headerProp}</h3>
          <div className="button-text">
            {bodyProp}
          </div>
          <FaAngleRight className="button-icon" />
        </Button>
      </Link>
    </div>
  );
}

ShopModeButton.propTypes = {
  shopModeProp: PropTypes.string.isRequired,
  headerProp: PropTypes.string.isRequired,
  bodyProp: PropTypes.string.isRequired,
  setShopModeProp: PropTypes.func.isRequired,
};

export default ShopModeButton;
