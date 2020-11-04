import {
  Caption, ResourceItem, Stack, TextStyle, Thumbnail, Button, Icon,
} from '@shopify/polaris';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import {
  CircleTickMajor,
} from '@shopify/polaris-icons';
import { remoteItemFromList } from './shoppingListSlice';
import './ShoppingList.scss';

function PopUpListItem(item) {
  const {
    UPC, name, imageLink, aisleNumber, shelfNumber,
  } = item;
  const dispatch = useDispatch();
  const onRemoveItemClicked = () => {
    dispatch(remoteItemFromList({ UPC }));
  };
  return (
    <div className="pop-up-item">
      <ResourceItem id={UPC}>
        <Stack alignment="center">
          <div className="confirmed-icon">
            <Icon source={CircleTickMajor} />
          </div>
          <div className="item-image">
            <Thumbnail source={imageLink} alt={name} size="large" />
          </div>
          <div className="item-text">
            <h3>
              <TextStyle variation="strong">{name}</TextStyle>
            </h3>
            <Caption>
              <div className="item-quantity">
                <p>Quantity:</p>
                <input type="number" className="quantityDiv" disabled placeholder="1" />
              </div>
            </Caption>
            <div className="item-location">
              <p>
                Aisle
                <span> </span>
                {aisleNumber}
                , Shelf
                <span> </span>
                {shelfNumber}
              </p>
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