import React, { useCallback, useState } from 'react';
import {
  Modal,
  OptionList,
  TextField,
} from '@shopify/polaris/';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToList } from '../../features/ShoppingList/shoppingListSlice';

function AutoCompleteSearchField() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemList);
  const itemList = items;
  const stringMiddleWare = ' - ';
  const transformed = itemList.map(({
    name, UPC, price, xLocation, yLocaiton, imageLink,
  }) => ({
    label: name.concat(stringMiddleWare, price),
    value: name,
    UPC,
    price,
    xLocation,
    yLocaiton,
    imageLink,
  }));
  const [value, setValue] = useState('');
  const [options, setOptions] = useState(transformed);
  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    if (newValue === '') {
      setOptions(transformed);
    }
    // console.log(transformed);
    const filterRegex = new RegExp(newValue, 'i');
    const resultOptions = transformed.filter((option) => option.label.match(filterRegex));
    setOptions(resultOptions);
  }, [transformed]);
  const [selected, setSelected] = useState([]);
  // This below method will work with onClick
  const addToCart = () => {
    const allSelectedItems = itemList.filter((item) => (selected.includes(item.name)));
    dispatch(addItemToList(allSelectedItems));
  };

  return (
    <div style={{ height: '225px' }}>
      <TextField
        label="itemSearchTextField"
        labelHidden
        value={value}
        onChange={handleChange}
        placeholder="Search"
        type="search"
      />
      <OptionList
        onChange={setSelected}
        options={options}
        selected={selected}
        allowMultiple
      />
      <Modal.Section>
        <button type="button" onClick={addToCart}>Add To Cart</button>
      </Modal.Section>
    </div>
  );
}

export default AutoCompleteSearchField;
