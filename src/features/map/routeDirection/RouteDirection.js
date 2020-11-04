import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, Button, ButtonGroup, Icon, Tooltip,
} from '@shopify/polaris';
import { ArrowUpMinor, QuestionMarkMajor } from '@shopify/polaris-icons';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ItemImage from '../../../assets/paper-towel.png';
import './routeDirection.scss';
import { removeItem } from '../mapSlice';

const RouteDirection = ({ currentItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="route-direction">
      <Card>
        <Card.Section>
          <div className="title">
            <Icon source={ArrowUpMinor} />
            <p>Continue down Aisle 12</p>
          </div>
          <div className="product">
            <img src={ItemImage} alt={currentItem.name} />
            <p>{currentItem.name}</p>
          </div>
          <div className="footer">
            <ButtonGroup fullWidth>
              <Button onClick={() => dispatch(removeItem())}>Remove Item</Button>
              <Button primary onClick={() => history.push('/scan')}>Scan &amp; Confirm</Button>
            </ButtonGroup>
            <Tooltip
              active={false}
              preferredPosition="mostSpace"
              content="Pick up the item outlined above. When you have the item, click
                'Scan and Confirm' and scan the barcode to confirm the item."
            >
              <Icon
                source={QuestionMarkMajor}
              />
            </Tooltip>
          </div>
        </Card.Section>
      </Card>
    </div>
  );
};
RouteDirection.propTypes = {
  currentItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.bool.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    aisle: PropTypes.number.isRequired,
    upc: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    inCart: PropTypes.bool.isRequired,
  }).isRequired,
};

RouteDirection.defaultProps = {
};

export default RouteDirection;
