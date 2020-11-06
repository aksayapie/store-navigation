import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  OptionList,
  TextField,
  Button,
} from '@shopify/polaris/';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToList } from '../../features/ShoppingList/shoppingListSlice';
import './listPopup.scss';

function AutoCompleteSearchField({ handleCloseProp }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemList);
  const itemList = items;
  const stringMiddleWare = ' - $';
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
    handleCloseProp();
  };

  return (
    <div className="search-container" style={{ height: '500px' }}>
      <div className="search-box">
        <TextField
          label="itemSearchTextField"
          labelHidden
          value={value}
          onChange={handleChange}
          placeholder="Search"
          type="search"
        />
      </div>
      <div className="option-list">
        <OptionList
          onChange={setSelected}
          options={options}
          selected={selected}
          allowMultiple
        />
      </div>
      <div className="add-button">
        <Button primary type="button" onClick={addToCart}>Add To ShoppingList</Button>
      </div>
    </div>
  );
}

AutoCompleteSearchField.propTypes = {
  handleCloseProp: PropTypes.func.isRequired,
};

export default AutoCompleteSearchField;
