import { createSlice } from '@reduxjs/toolkit';

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
  items: [{
    id: 1, name: 'hygiene articles', price: 22.6, inStock: true, lat: 40.65553827272728, lng: -74.00886413476874, inCart: false,
  }, {
    id: 2, name: 'artif. sweetener', price: 70.44, inStock: false, lat: 40.65558954545454, lng: -74.00880931658693, inCart: false,
  }, {
    id: 3, name: 'light bulbs', price: 87.12, inStock: true, lat: 40.65564081818183, lng: -74.00875449840511, inCart: false,
  }, {
    id: 4, name: 'canned vegetables', price: 17.68, inStock: true, lat: 40.655692090909106, lng: -74.00869968022329, inCart: false,
  }, {
    id: 5, name: 'chewing gum', price: 25.27, inStock: true, lat: 40.65574336363637, lng: -74.00864486204148, inCart: false,
  }],
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
      state.items = state.items.map((item) => {
        if (item.id === scannedItemId) {
          item.inCart = true;
        }

        return item;
      });

      // set the current item displayed in directions to be the
      // next item in the items array not inCart.
      // Possibly error prone because array might not keep item order.
      // Solution could be to number items in scan order on the path.
      state.currentItem = state.items.find((item) => !item.inCart);
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

// actions
export const { removeFirstPath, setCurrentItem, scanItem } = mapSlice.actions;

// selectors
export const selectPath = (state) => state.map.path;
export const selectItems = (state) => state.map.items;
export const selectCurrentItem = (state) => state.map.currentItem;
export const selectRemainingItemsCount = (state) => state.map.items.reduce((acc, curr) => {
  if (curr.inCart) {
    return acc + 1;
  }
  return acc;
}, 0);

export default mapSlice.reducer;
