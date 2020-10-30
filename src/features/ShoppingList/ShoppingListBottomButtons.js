import React from 'react';
import { Button, ButtonGroup, Card } from '@shopify/polaris';

export default function ShoppingListBottomButtons() {
  return (
    <Card>
      <ButtonGroup fullWidth>
        <Button>Order for Delivery</Button>
        <div style={{ color: '#005DAA' }}>
          <Button primary>Shop in Store</Button>
        </div>
      </ButtonGroup>
    </Card>
  );
}
