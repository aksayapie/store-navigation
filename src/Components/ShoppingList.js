import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../features/ShoppingList/shoppingListSlice';

function ShoppingList() {
  const items = useSelector(selectItems);
  return (
    <div>
      <div className="grid-container">
        {items.map((item) => (
          <div className="line1">
            <p key={item.id}>{item.name}</p>
            <img src={item.imageLink} alt={item.name} className="single-photo" />
            <p>{item.price}</p>
          </div>
        ))}
        {console.log(items)}
      </div>
    </div>
  );
}
export default ShoppingList;
