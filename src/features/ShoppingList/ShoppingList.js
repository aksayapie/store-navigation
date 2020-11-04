import React from 'react';
import { useSelector } from 'react-redux';
import { ResourceList, Card, Button } from '@shopify/polaris';
import PropTypes from 'prop-types';
import { selectItems, selectConfirmedItems } from './shoppingListSlice';
import ShoppingItem from './shoppingItem';

function ShoppingList({ isConfirmedList }) {
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

  return (
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={items}
        renderItem={ShoppingItem}
      />
    </Card>
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
  isConfirmedList: PropTypes.bool.isRequired,
};
export default ShoppingList;
