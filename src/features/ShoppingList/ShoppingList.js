import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ResourceList, Card, DisplayText } from '@shopify/polaris';
import { selectItems } from './shoppingListSlice';
import ShoppingItem from './shoppingItem';

function ShoppingList() {
  const items = useSelector(selectItems);
  const [selectedItems, setSelectedItems] = useState([]);
  const resourceName = {
    singular: 'Shopping Item',
    plural: 'Shopping Items',
  };
  const bulkActions = [
    {
      content: 'Remove Items',
      onAction: () => console.log('ToDo: Remove bulk Items'),
    },
  ];
  return (
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={items}
        renderItem={ShoppingItem}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        bulkActions={bulkActions}
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
