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
    UPC, name, imageURL, aisleNumber, shelfNumber, price,
  } = item;
  const dispatch = useDispatch();
  const onRemoveItemClicked = () => {
    dispatch(removeItemFromList(item));
  };

  // const items = useSelector(selectItems);
  // let itemCounter = null;
  // items.forEach((value, i) => {
  //   if (value.UPC === UPC) {
  //     itemCounter = i + 1;
  //   }
  // });

  return (
    <div className="pop-up-item">
      <ResourceItem id={UPC}>
        <Stack alignment="center">
          {/* <div className="item-counter-circle">
            <div className="item-counter">1</div>
          </div> */}
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
