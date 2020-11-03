import React from 'react';
// import { Page } from '@shopify/polaris';
import ShoppingList, { ShoppingListTitle } from './ShoppingList';
import ShoppingListHeader from './ShoppingListHeader';
import ShoppingListBottomButtons from './ShoppingListBottomButtons';
import ListPageTopBar from './ListPageTopBar';
import './ShoppingList.scss';

export default function FrontPageShoppingList() {
  return (
    <div className="shopping-list-container">
      <ListPageTopBar />
      <h1>My Account</h1>
      <ShoppingListHeader />
      <br />
      <ShoppingListTitle />
      <br />
      <ShoppingList />
      <ShoppingListBottomButtons />
    </div>
  );
}
