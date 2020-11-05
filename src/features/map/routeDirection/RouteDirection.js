import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, Button, ButtonGroup, Icon, Tooltip,
} from '@shopify/polaris';
import { QuestionMarkMajor, ChevronUpMinor, ChevronDownMinor } from '@shopify/polaris-icons';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ItemImage from '../../../assets/paper-towel.png';
import './routeDirection.scss';
import { nextItem } from '../mapSlice';

const RouteDirection = ({ currentItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showFullCard, setShowFullCard] = useState(true);
  // let showFullCard = true;

  function setShowCard() {
    setShowFullCard(!showFullCard);
    console.log(showFullCard);
  }

  return (
    <div className="route-direction">
      {showFullCard ? (
        <Card>
          <Card.Section>
            <div className="title">
              <div className="item-counter-circle">
                <div className="item-counter">1</div>
              </div>
              <p>Continue down Aisle 12</p>
            </div>
            <div className="product">
              <img src={ItemImage} alt={currentItem.name} />
              <div className="card-text">
                <p>{currentItem.name}</p>
                <p className="item-loc">
                  Aisle
                  <span> </span>
                  {currentItem.aisle}
                  , Shelf
                  <span> </span>
                  {currentItem.shelf}
                </p>
              </div>
            </div>
            <div className="footer">
              <ButtonGroup fullWidth>
                <Button onClick={() => dispatch(nextItem())}>Remove Item</Button>
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
              <div className="item-counter-circle">
                <div className="item-counter">1</div>
              </div>
              <div className="short-card-text title">
                <p>Continue down Aisle 12</p>
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
    aisle: PropTypes.number.isRequired,
    shelf: PropTypes.number.isRequired,
    upc: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    inCart: PropTypes.bool.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};

RouteDirection.defaultProps = {
};

export default RouteDirection;
