import { createSlice } from '@reduxjs/toolkit';
import { ALL_ITEMS, SHOPPING_LIST } from './sampleData';

// TODO: read data from backend API
// TODO: ask for ID on each item
// TODO: item data maybe should be in itemList slice
// TODO: Normalize data
const initialState = {
  path: [],
  items: null,
  itemsById: null,
  shoppingList: [],
  currentItem: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    // simulate API call
    fetchItems: (state) => {
      state.items = ALL_ITEMS;
      state.itemsById = ALL_ITEMS.reduce((byId, item) => {
        byId[item.id] = item;
        return byId;
      });
      state.shoppingList = SHOPPING_LIST;
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
      state.currentItem = state.itemsById[scannedItemId];
    },
    setCurrentItem: (state, action) => {
      const itemId = action.payload;
      state.currentItem = state.itemsById[itemId];
    },
  },
});

// actions
export const {
  removeFirstPath, setCurrentItem, scanItem, fetchItems,
} = mapSlice.actions;

// selectors
export const selectPath = (state) => state.map.path;
export const selectShoppingList = (state) => state.map.shoppingList;
export const selectAllItems = (state) => state.map.items;
export const selectCurrentItem = (state) => state.map.currentItem;
export const selectShoppingListRemainingCount = (state) => (
  state.mapshoppingList.reduce((acc, curr) => {
    if (curr.inCart) {
      return acc + 1;
    }
    return acc;
  }, 0));

export default mapSlice.reducer;
