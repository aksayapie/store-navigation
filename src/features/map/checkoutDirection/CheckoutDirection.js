import React from 'react';
import {
  Card, Button, Icon,
} from '@shopify/polaris';
import { ArrowUpMinor } from '@shopify/polaris-icons';
import { useHistory } from 'react-router-dom';

import './checkoutDirection.scss';

const CheckoutDirection = () => {
  const history = useHistory();

  return (
    <div className="checkout-direction">
      <Card>
        <Card.Section>
          <div className="title">
            <Icon source={ArrowUpMinor} />
            <p>Proceed to Single Scan Checkout lanes</p>
          </div>
          <Button fullWidth primary onClick={() => history.push('/checkout')}>Single Scan Code</Button>
        </Card.Section>
      </Card>
    </div>
  );
};

export default CheckoutDirection;
