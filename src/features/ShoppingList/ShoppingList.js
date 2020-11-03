import React from 'react';
import { useSelector } from 'react-redux';
import { ResourceList, Card, Button } from '@shopify/polaris';
import { selectItems } from './shoppingListSlice';
import ShoppingItem from './shoppingItem';

function ShoppingList() {
  const items = useSelector(selectItems);
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
export default ShoppingList;
