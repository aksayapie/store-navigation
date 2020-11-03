import React from 'react';
import { Button, Icon } from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import './ShopMode.scss';
import {
  ChevronRightMinor,
} from '@shopify/polaris-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateShopMode } from './shopModeSlice';

function ShopModeButton({
  shopModeProp, headerProp, bodyProp,
}) {
  const dispatch = useDispatch();
  // update redux with new value for shop mode,
  // either 'safe' or 'quick'
  const updateShoppingMode = (value) => {
    dispatch(updateShopMode(value));
  };

  return (
    <div>
      <Link to="/map" className="link">
        <Button outline onClick={() => updateShoppingMode(shopModeProp)}>
          <h3>{headerProp}</h3>
          <div className="button-text">
            {bodyProp}
          </div>
          <Icon source={ChevronRightMinor} className="button-icon" />
        </Button>
      </Link>
    </div>
  );
}

ShopModeButton.propTypes = {
  shopModeProp: PropTypes.string.isRequired,
  headerProp: PropTypes.string.isRequired,
  bodyProp: PropTypes.string.isRequired,
};

export default ShopModeButton;
