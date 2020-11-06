import {
  Caption, ResourceItem, Stack, TextStyle, Button, Icon,
} from '@shopify/polaris';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import {
  CircleTickMajor,
} from '@shopify/polaris-icons';
import { removeItemFromConfirmed } from './shoppingListSlice';
import './ShoppingList.scss';

function PopUpListItem(item) {
  const {
    UPC, name, imageURL, aisleNumber, shelfNumber,
  } = item;
  const dispatch = useDispatch();
  const onRemoveItemClicked = () => {
    dispatch(removeItemFromConfirmed({ UPC }));
  };
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
              <TextStyle variation="strong">{name}</TextStyle>
            </h3>
            <Caption>
              <div className="item-quantity">
                <p>Quantity:</p>
                <input type="number" className="quantityDiv" placeholder="1" />
              </div>
            </Caption>
            <div className="item-location">
              <div>
                <p>
                  {`Aisle ${aisleNumber}, Shelf ${shelfNumber}`}
                </p>
              </div>
            </div>
            {/* <div className="item-price">
              <p>
                $
                {price}
              </p>
            </div> */}
          </div>
        </Stack>
        <Stack alignment="center" spacing="extraLoose">
          <div className="filler-stack-item" />
          <Button onClick={onRemoveItemClicked}>Delete Item</Button>
          <Link to="/scan" className="link">
            <Button primary>Scan & Confirm</Button>
          </Link>
        </Stack>
      </ResourceItem>
    </div>
  );
}
export default PopUpListItem;
