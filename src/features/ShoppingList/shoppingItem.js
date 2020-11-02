import {
  Caption, ResourceItem, Stack, TextStyle, Thumbnail, Button,
} from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import React from 'react';
import { remoteItemFromList } from './shoppingListSlice';
// import { useSelector } from 'react-redux';

function ShoppingItem(item) {
  const {
    id, name, price, imageLink,
  } = item;
  const dispatch = useDispatch();
  const onRemoveItemClicked = () => {
    dispatch(remoteItemFromList({ id }));
  };
  return (
    <ResourceItem id={id}>
      <Stack>
        <Thumbnail source={imageLink} alt={name} size="large" />
        <div>
          <h3>
            <TextStyle variation="strong">{name}</TextStyle>
          </h3>
          <Caption>
            Item #
            {id}
          </Caption>
          <p>{price}</p>
        </div>
      </Stack>
      <Stack alignment="center" spacing="extraLoose">
        <div>
          <p>Quantity:</p>
          <input type="number" className="quantityDiv" disabled placeholder="1" />
        </div>
        <Button destructive onClick={onRemoveItemClicked}>Delete Item</Button>
      </Stack>
    </ResourceItem>
  );
}
export default ShoppingItem;
