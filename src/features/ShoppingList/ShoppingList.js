import React from 'react';
import { useSelector } from 'react-redux';
import { ResourceList, Card, DisplayText } from '@shopify/polaris';
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
  return (
    <div>
      <DisplayText size="medium">Shopping List</DisplayText>
    </div>
  );
}
export default ShoppingList;
