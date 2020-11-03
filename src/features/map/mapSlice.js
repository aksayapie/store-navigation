import { createSlice } from '@reduxjs/toolkit';
import { SHOPPING_LIST, PATH } from './sampleData';

const initialState = {
  path: PATH,
  shoppingList: SHOPPING_LIST,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
});

// selectors
export const selectPath = (state) => state.map.path;
export const selectShoppingList = (state) => state.map.shoppingList;
export const selectCurrentItem = (state) => state.map.shoppingList.find((item) => !item.inCart);

export default mapSlice.reducer;
