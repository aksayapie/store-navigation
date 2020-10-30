import React from 'react';
import { Page } from '@shopify/polaris';
import ShoppingList, { ShoppingListTitle } from './ShoppingList';
import ShoppingListHeader from './ShoppingListHeader';
import ShoppingListBottomButtons from './ShoppingListBottomButtons';
import ListPageTopBar from './ListPageTopBar';

export default function FrontPageShoppingList() {
  return (
    <div>
      <ListPageTopBar />
      <Page title="My Account">
        <ShoppingListHeader />
        <br />
        <ShoppingListTitle />
        <br />
        <ShoppingList />
        <ShoppingListBottomButtons />
      </Page>
    </div>
  );
}
