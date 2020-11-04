import React from 'react';
import { Page } from '@shopify/polaris';
import ShoppingList, { ShoppingListTitle } from './ShoppingList';
import ShoppingListHeader from './ShoppingListHeader';
import ShoppingListBottomButtons from './ShoppingListBottomButtons';
import ListPageTopBar from './ListPageTopBar';
import './ShoppingList.scss';

export default function FrontPageShoppingList() {
  return (
    <div className="shopping-list-container">
      <ListPageTopBar />
      <Page title="My Account">
        <ShoppingListHeader />
        <br />
        <div className="list-title">
          <ShoppingListTitle />
        </div>
        <br />
        <div className="shopping-item-container">
          <ShoppingList isItemPopUpProp={false} isConfirmedList={false} />
        </div>
        <ShoppingListBottomButtons />
      </Page>
    </div>
  );
}
