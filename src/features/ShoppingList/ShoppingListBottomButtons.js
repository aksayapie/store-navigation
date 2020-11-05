import React from 'react';
import { Button } from '@shopify/polaris';
import { Link } from 'react-router-dom';
import './ShoppingList.scss';

export default function ShoppingListBottomButtons() {
  return (
    <div className="bottom-buttons">
      <div style={{ color: '#005DAA' }}>
        <Link to="/welcome" className="link">
          <Button primary>Shop in Store</Button>
        </Link>
      </div>
      <Button>Order for Delivery</Button>
    </div>
  );
}
