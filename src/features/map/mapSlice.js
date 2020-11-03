import { createSlice } from '@reduxjs/toolkit';
import { SHOPPING_LIST, PATH } from './sampleData';

const initialState = {
  path: PATH,
  shoppingList: SHOPPING_LIST,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    removeItem(state) {
      const currentItem = state.shoppingList.find((item) => !item.inCart);
      state.shoppingList = state.shoppingList.filter((item) => item.upc !== currentItem.upc);
    },
  },
});

// selectors
export const selectPath = (state) => state.map.path;
export const selectShoppingList = (state) => state.map.shoppingList;
export const selectCurrentItem = (state) => state.map.shoppingList.find((item) => !item.inCart);
export const selectRemainingItemsCount = (state) => state.map.shoppingList.reduce((acc, curr) => {
  if (curr.inCart) {
    return acc + 1;
  }
  return acc;
}, 0);

// actions
export const { removeItem } = mapSlice.actions;

export default mapSlice.reducer;
