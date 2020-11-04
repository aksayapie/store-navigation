import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ResourceList, Card, Button } from '@shopify/polaris';
import { selectItems } from './shoppingListSlice';
import ShoppingItem from './shoppingItem';
import PopUpListItem from './PopUpListItem';

function ShoppingList({ isItemPopUpProp }) {
  const items = useSelector(selectItems);
  const resourceName = {
    singular: 'Shopping Item',
    plural: 'Shopping Items',
  };
  let shopItemType = null;
  if (isItemPopUpProp) {
    shopItemType = PopUpListItem;
  } else {
    shopItemType = ShoppingItem;
  }

  return (
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={items}
        renderItem={shopItemType}
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
  isItemPopUpProp: PropTypes.bool.isRequired,
};
export default ShoppingList;
