import { createSlice } from '@reduxjs/toolkit';
import ITEM_DATA from './sampleData';

// TODO: read data from backend API
// TODO: ask for ID on each item
// TODO: item data maybe should be in itemList slice
// TODO: Normalize data
const initialState = {
  path: [{ lat: 40.65553827272728, lng: -74.00886413476874 },
    { lat: 40.65558954545454, lng: -74.00880931658693 },
    { lat: 40.65564081818183, lng: -74.00875449840511 },
    { lat: 40.655692090909106, lng: -74.00869968022329 },
    { lat: 40.65574336363637, lng: -74.00864486204148 }],
  items: ITEM_DATA,
  shoppingList: [{ id: 4, inCart: false },
    { id: 18, inCart: false },
    { id: 24, inCart: false },
    { id: 33, inCart: false },
    { id: 42, inCart: false },
    { id: 47, inCart: false },
    { id: 53, inCart: false },
    { id: 61, inCart: false },
    { id: 78, inCart: false },
    { id: 81, inCart: false },
    { id: 89, inCart: false },
    { id: 92, inCart: false }],
  currentItem: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    removeFirstPath: (state) => {
      state.path = state.path.filter((_, i) => i !== 0);
    },
    scanItem: (state, action) => {
      const scannedItemId = action.payload;
      // set the scanned item inCart property to true
      state.shoppingList = state.shoppingList.map((item) => {
        if (item.id === scannedItemId) {
          item.inCart = true;
        }

        return item;
      });

      // set the current item displayed in directions to be the
      // next item in the items array not inCart.
      // Possibly error prone because array might not keep item order.
      // Solution could be to number items in scan order on the path.
      state.currentItem = state.shoppingList.find((item) => !item.inCart);
    },
    setCurrentItem: (state, action) => {
      const itemId = action.payload;
      state.currentItem = state.items.find((item) => item.id === itemId);
    },
  },
});

// actions
export const { removeFirstPath, setCurrentItem, scanItem } = mapSlice.actions;

// selectors
export const selectPath = (state) => state.map.path;
export const selectShoppingList = (state) => state.mapshoppingList;
export const selectCurrentItem = (state) => state.map.currentItem;
export const selectShoppingListRemainingCount = (state) => (
  state.mapshoppingList.reduce((acc, curr) => {
    if (curr.inCart) {
      return acc + 1;
    }
    return acc;
  }, 0));

export default mapSlice.reducer;
