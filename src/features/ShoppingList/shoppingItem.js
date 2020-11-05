import {
  Caption, ResourceItem, Stack, TextStyle, Thumbnail, Button,
} from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import React from 'react';
import { removeItemFromList } from './shoppingListSlice';
import './ShoppingList.scss';

function ShoppingItem(item) {
  const {
    UPC, name, price, imageURL,
  } = item;
  const dispatch = useDispatch();
  const onRemoveItemClicked = () => {
    dispatch(removeItemFromList({ UPC }));
  };
  return (
    <div className="account-item">
      <ResourceItem id={UPC}>
        <Stack>
          <div className="item-image">
            <Thumbnail source={imageURL} alt={name} size="large" />
          </div>
          <div>
            <h3>
              <TextStyle variation="strong">{name}</TextStyle>
            </h3>
            <Caption>
              Item #
              {UPC}
            </Caption>
            <div className="item-price">
              <p>
                $
                {price}
              </p>
            </div>
          </div>
        </Stack>
        <Stack alignment="center" spacing="extraLoose">
          <div className="item-quantity">
            <p>Quantity:</p>
            <input type="number" className="quantityDiv" placeholder="1" />
          </div>
          <Button destructive onClick={onRemoveItemClicked}>Delete Item</Button>
        </Stack>
      </ResourceItem>
    </div>
  );
}
export default ShoppingItem;
