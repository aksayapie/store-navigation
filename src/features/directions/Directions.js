import React from 'react';
import {
  Card, Button, ButtonGroup, Icon,
} from '@shopify/polaris';
import { ArrowUpMinor } from '@shopify/polaris-icons';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import ItemImage from '../../assets/paper-towel.png';
import './directions.scss';

const Directions = ({ currentItem, onScan }) => (
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
            <Button primary onClick={() => onScan(currentItem)}>Scan &amp; Confirm</Button>
          </ButtonGroup>
        </div>
      </Card.Section>
    </Card>
  </div>
);

Directions.propTypes = {
  currentItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  onScan: PropTypes.func.isRequired,
};

Directions.defaultProps = {
};

export default Directions;
