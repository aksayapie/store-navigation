import {
  Caption, ResourceItem, Stack, TextStyle, Button,
} from '@shopify/polaris';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import { removeItemFromList } from './shoppingListSlice';
import './ShoppingList.scss';

function PopUpToBuyListItem(item) {
  const {
    UPC, name, imageURL, aisleNumber, shelfNumber, price, step,
  } = item;
  const dispatch = useDispatch();
  const onRemoveItemClicked = () => {
    dispatch(removeItemFromList(item));
  };

  function truncate(str, n) {
    return (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
  }

  return (
    <div className="pop-up-item">
      <ResourceItem id={UPC}>
        <Stack alignment="center">
          <div className="item-image">
            <div className="item-counter-circle">
              <span className="item-counter">{step}</span>
            </div>
            <img src={imageURL} alt={name} size="large" />
          </div>
          <div className="item-text">
            <h3>
              <TextStyle variation="strong">{truncate(name, 25)}</TextStyle>
            </h3>
            <Caption>
              <div className="item-quantity">
                <p>Quantity:</p>
                <input type="number" className="quantityDiv" placeholder="1" />
                <br />
                Price: $
                {price}
              </div>
            </Caption>
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
          <Link to="/scan" className="link">
            <Button primary>Scan &amp; Confirm</Button>
          </Link>
        </Stack>
      </ResourceItem>
    </div>
  );
}
export default PopUpToBuyListItem;
