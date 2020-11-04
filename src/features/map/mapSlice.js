import { createSlice } from '@reduxjs/toolkit';

import { SHOPPING_LIST, PATH } from './sampleData';
import getShelfPolygons from '../../util/mapUtil';

const initialState = {
  path: PATH || [],
  shoppingList: SHOPPING_LIST || [],
  shelfPolygons: [],
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    addStepsToShoppingList(state) {
      state.shoppingList = state.shoppingList.reduce((acc, curr, index) => {
        curr.step = index + 1;
        acc.push(curr);
        return acc;
      }, []);
    },
    removeItem(state) {
      const currentItem = state.shoppingList.find((item) => !item.inCart);
      state.shoppingList = state.shoppingList.filter((item) => item.upc !== currentItem.upc);
    },
    calculateShelfPolygons(state, action) {
      const itemLocations = action.payload;
      state.shelfPolygons = getShelfPolygons(itemLocations);
    },
  },
});

// selectors
export const selectShoppingList = (state) => state.map.shoppingList;
export const selectCurrentItem = (state) => state.map.shoppingList.find((item) => !item.inCart);
export const selectRemainingItemsCount = (state) => state.map.shoppingList.reduce((acc, curr) => {
  if (curr.inCart) {
    return acc + 1;
  }
  return acc;
}, 0);

// actions
export const { removeItem, calculateShelfPolygons, addStepsToShoppingList } = mapSlice.actions;

export default mapSlice.reducer;
