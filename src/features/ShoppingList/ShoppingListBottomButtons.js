import React from 'react';
import { Button } from '@shopify/polaris';
import { Link } from 'react-router-dom';
import './ShoppingList.scss';

export default function ShoppingListBottomButtons() {
  return (
    <div className="bottom-buttons">
      <Button fullWidth>Order for Delivery</Button>
      <div style={{ color: '#005DAA' }}>
        <Link to="/welcome" className="link">
          <Button fullWidth primary>Shop in Store</Button>
        </Link>
      </div>
    </div>
  );
}
