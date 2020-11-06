/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, Button, ButtonGroup, Icon, Tooltip,
} from '@shopify/polaris';
import { QuestionMarkMajor, ChevronUpMinor, ChevronDownMinor } from '@shopify/polaris-icons';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './routeDirection.scss';
import { nextItem } from '../mapSlice';
import { removeItemFromList } from '../../ShoppingList/shoppingListSlice';

const RouteDirection = ({ currentItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showFullCard, setShowFullCard] = useState(true);

  function setShowCard() {
    setShowFullCard(!showFullCard);
  }

  const handleRemove = () => {
    dispatch(nextItem());
    dispatch(removeItemFromList({ UPC: currentItem.UPC }));
  };

  return (
    <div className="route-direction">
      {showFullCard ? (
        <Card>
          <Card.Section>
            <div className="title">
              <div className="item-counter-circle">
                <span className="item-counter">{currentItem.step}</span>
              </div>
              <p>{`Walk to Aisle ${currentItem.aisleNumber}, Shelf ${currentItem.shelfNumber}`}</p>
            </div>
            <div className="product">
              <img src={currentItem.imageURL} alt={currentItem.name} />
              <div className="card-text">
                <p>
                  {currentItem.name}
                </p>
                <p className="price">
                  {`$${currentItem.price.toFixed(2)}`}
                </p>
              </div>
            </div>
            <div className="footer">
              <ButtonGroup fullWidth>
                <Button onClick={handleRemove}>Remove Item</Button>
                <Button primary onClick={() => history.push('/scan')}>Scan &amp; Confirm</Button>
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
              </ButtonGroup>
              <div className="up-button">
                <Button plain onClick={setShowCard}>
                  <div className="up-icon">
                    <Icon source={ChevronUpMinor} />
                  </div>
                </Button>
              </div>
            </div>
          </Card.Section>
        </Card>
      )
        : (
          <Card>
            <Card.Section>
              <div className="title">
                <div className="item-counter-circle">
                  <div className="item-counter">{currentItem.step}</div>
                </div>
                <div className="short-card-text">
                  <p>{`Walk to Aisle ${currentItem.aisleNumber}, Shelf ${currentItem.shelfNumber}`}</p>
                  <div className="short-card-name">
                    <p>{currentItem.name}</p>
                  </div>
                </div>
              </div>
            </Card.Section>
            <div className="up-button">
              <Button plain onClick={setShowCard}>
                <div className="up-icon">
                  <Icon source={ChevronDownMinor} />
                </div>
              </Button>
            </div>
          </Card>
        )}
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
    aisleNumber: PropTypes.number.isRequired,
    shelfNumber: PropTypes.number.isRequired,
    UPC: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    inCart: PropTypes.bool.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};

RouteDirection.defaultProps = {
};

export default RouteDirection;
