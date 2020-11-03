import React from 'react';
import {
  Card, Button, ButtonGroup, Icon,
} from '@shopify/polaris';
import { ArrowUpMinor } from '@shopify/polaris-icons';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ItemImage from '../../assets/paper-towel.png';
import './directions.scss';

const Directions = ({ currentItem }) => {
  const history = useHistory();

  return (
    <div className="direction-modal-container">
      <Card>
        <Card.Section>
          <div className="direction-title">
            <Icon source={ArrowUpMinor} className="direction-arrow" />
            <p>Continue down Aisle 12</p>
          </div>
          <AnimatePresence>
            <motion.div className="direction-item">
              <img src={ItemImage} alt={currentItem.name} />
              <p>{currentItem.name}</p>
            </motion.div>
          </AnimatePresence>
          <div className="direction-footer">
            <ButtonGroup fullWidth>
              <Button>Remove Item</Button>
              <Button primary onClick={() => history.push('/scan')}>Scan &amp; Confirm</Button>
            </ButtonGroup>
          </div>
        </Card.Section>
      </Card>
    </div>
  );
};
Directions.propTypes = {
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

Directions.defaultProps = {
};

export default Directions;
