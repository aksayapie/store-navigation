import { Card, Button, ButtonGroup } from '@shopify/polaris';
import { BsArrowUp } from 'react-icons/bs';
import React from 'react';

import ItemImage from '../../assets/paper-towels.png';
import './directions.scss';

const Directions = () => (
  <div className="direction-modal-container">
    <Card>
      <Card.Section>
        <div className="direction-title">
          <BsArrowUp className="direction-arrow" />
          <p>Continue down Aisle 12</p>
        </div>
        <div className="direction-item">
          <img src={ItemImage} alt="Toilet Paper" />
          <p>Bounty Paper Towel, 450 ft Rolls, 12 - count</p>
        </div>
        <ButtonGroup fullWidth>
          <Button>Remove Item</Button>
          <Button primary>Scan &amp; Confirm</Button>
        </ButtonGroup>
      </Card.Section>
    </Card>
  </div>
);

export default Directions;
