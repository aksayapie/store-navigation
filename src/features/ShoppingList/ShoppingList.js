import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ResourceList, Card, Button,
} from '@shopify/polaris';
import { selectItems, selectConfirmedItems } from './shoppingListSlice';
import ShoppingItem from './shoppingItem';
import PopUpListItem from './PopUpListItem';
import PopUpToBuyList from './PopUpToBuyList';
import './ShoppingList.scss';

function ShoppingList({ isItemPopUpProp, isConfirmedList }) {
  let items = {};
  if (isConfirmedList) {
    items = useSelector(selectConfirmedItems);
    console.log(items);
  } else {
    items = useSelector(selectItems);
    console.log(items);
  }
  const resourceName = {
    singular: 'Shopping Item',
    plural: 'Shopping Items',
  };
  let shopItemType = null;
  let listEmpty = true;
  if (items.length > 0) {
    listEmpty = false;
  }
  if (isItemPopUpProp) {
    if (isConfirmedList) {
      shopItemType = PopUpListItem;
    } else {
      shopItemType = PopUpToBuyList;
    }
  } else {
    shopItemType = ShoppingItem;
  }

  return (
    <div className="shopping-list-card">
      <Card>
        {listEmpty
          ? (
            <div className="no-items">No Items</div>
          )
          : (
            <ResourceList
              resourceName={resourceName}
              items={items}
              renderItem={shopItemType}
            />
          )}
      </Card>
    </div>
  );
}
export function ShoppingListTitle() {
  const items = useSelector(selectItems);
  return (
    <div>
      <h1 size="medium">
        My Shopping List (
        {items.length }
        {items.length === 1 ? ' item' : ' items'}
        )
      </h1>
      <Button plain>Edit</Button>
    </div>
  );
}

ShoppingList.propTypes = {
  isItemPopUpProp: PropTypes.bool.isRequired,
  isConfirmedList: PropTypes.bool.isRequired,
};
export default ShoppingList;
