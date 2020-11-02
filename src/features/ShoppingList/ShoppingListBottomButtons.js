import React from 'react';
import { Button, ButtonGroup, Card } from '@shopify/polaris';
import { Link } from 'react-router-dom';

export default function ShoppingListBottomButtons() {
  return (
    <Card>
      <ButtonGroup fullWidth>
        <Button>Order for Delivery</Button>
        <div style={{ color: '#005DAA' }}>
          <Link to="/welcome" className="link">
            <Button primary>Shop in Store</Button>
          </Link>
        </div>
      </ButtonGroup>
    </Card>
  );
}
