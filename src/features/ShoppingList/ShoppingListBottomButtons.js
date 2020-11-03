import React from 'react';
import { Button, ButtonGroup } from '@shopify/polaris';
import { Link } from 'react-router-dom';
import './ShoppingList.scss';

export default function ShoppingListBottomButtons() {
  return (
    <div className="bottom-buttons">
      <ButtonGroup fullWidth>
        <Button>Order for Delivery</Button>
        <div style={{ color: '#005DAA' }}>
          <Link to="/welcome" className="link">
            <Button primary>Shop in Store</Button>
          </Link>
        </div>
      </ButtonGroup>
    </div>
  );
}
