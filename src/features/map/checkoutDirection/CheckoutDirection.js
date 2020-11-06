import React from 'react';
import {
  Card, Button, Icon, Spinner,
} from '@shopify/polaris';
import { ArrowUpMinor } from '@shopify/polaris-icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './checkoutDirection.scss';

const CheckoutDirection = () => {
  const history = useHistory();

  const { isLoading: itemsLoading, itemsLoaded } = useSelector((state) => state.itemList);
  console.log(itemsLoading);
  console.log(itemsLoaded);
  return (
    <div className="checkout-direction">
      <Card>
        <Card.Section>
          {!itemsLoaded ? <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
            : (
              <div>
                <div className="title">
                  <Icon source={ArrowUpMinor} />
                  <p>Proceed to Single Scan Checkout lanes</p>
                </div>
                <Button fullWidth primary onClick={() => history.push('/checkout')}>Single Scan Code</Button>
              </div>
            )}
        </Card.Section>
      </Card>
    </div>
  );
};
export default CheckoutDirection;
