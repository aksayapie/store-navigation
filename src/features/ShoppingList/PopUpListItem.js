import {
  Caption, ResourceItem, Stack, TextStyle, Button, Icon,
} from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import React from 'react';
import {
  CircleTickMajor,
} from '@shopify/polaris-icons';
import { removeItemFromConfirmed } from './shoppingListSlice';
import './ShoppingList.scss';

function PopUpListItem(item) {
  const {
    UPC, name, imageURL, aisleNumber, shelfNumber, price,
  } = item;
  const dispatch = useDispatch();
  const onRemoveItemClicked = () => {
    dispatch(removeItemFromConfirmed({ UPC }));
  };

  function truncate(str, n) {
    return (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
  }

  return (
    <div className="pop-up-item">
      <ResourceItem id={UPC}>
        <Stack alignment="center">
          <div className="confirmed-icon">
            <Icon source={CircleTickMajor} />
          </div>
          <div className="item-image">
            <img src={imageURL} alt={name} size="large" />
          </div>
          <div className="item-text">
            <h3>
              <TextStyle variation="strong">{truncate(name, 20)}</TextStyle>
            </h3>
            <Caption>
              <div className="item-quantity">
                <p>Quantity:</p>
                <input type="number" className="quantityDiv" placeholder="1" />
              </div>
            </Caption>
            <div>
              <p className="price">
                Price: $
                {price}
              </p>
            </div>
            <div className="item-location">
              <div>
                <p>
                  {`Aisle ${aisleNumber}, Shelf ${shelfNumber}`}
                </p>
              </div>
            </div>
          </div>
        </Stack>
        <Stack alignment="center" spacing="extraLoose">
          <div className="filler-stack-item" />
          <Button onClick={onRemoveItemClicked}>Delete Item</Button>
        </Stack>
      </ResourceItem>
    </div>
  );
}
export default PopUpListItem;
