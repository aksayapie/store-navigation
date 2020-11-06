import { createSlice } from '@reduxjs/toolkit';
import sampleSize from 'lodash.samplesize';

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    confirmedItemsInCart: [],
    requestNewPath: false,
    shoppingListGenerated: false,
  },
  reducers: {
    populateShoppingList(state, action) {
      const itemList = action.payload;

      // fill shopping list with 5 random items with images
      state.items = sampleSize(itemList.filter((item) => item.imageURL.startsWith('https')), 5);
      state.shoppingListGenerated = true;
    },
    addStepsToShoppingList(state, action) {
      const path = action.payload;
      state.items = path.map((pathChunk) => pathChunk[pathChunk.length - 1]);
    },
    removeItemFromConfirmed(state, action) {
      const { UPC } = action.payload;
      const indexOfCurrentPost = state.confirmedItemsInCart.indexOf(
        state.confirmedItemsInCart.find((item) => item.UPC === UPC),
      );
      state.confirmedItemsInCart = [...state.confirmedItemsInCart.slice(0, indexOfCurrentPost),
        ...state.confirmedItemsInCart.slice(indexOfCurrentPost + 1)];
    },
    removeItemFromList(state, action) {
      const { UPC } = action.payload;
      const indexOfCurrentPost = state.items.indexOf(state.items.find((item) => item.UPC === UPC));
      state.items = [...state.items.slice(0, indexOfCurrentPost),
        ...state.items.slice(indexOfCurrentPost + 1)];

      if (indexOfCurrentPost !== 0) {
        state.requestNewPath = true;
      } else {
        state.requestNewPath = false;
      }
    },
    addItemToList(state, action) {
      const toBeAdded = action.payload;
      Object.keys(toBeAdded).forEach(
        (key) => {
          const found = state.items.findIndex((element) => element.UPC === toBeAdded[key].UPC);
          if (found < 0) {
            state.items.push(toBeAdded[key]);
          }
        },
      );
      state.requestNewPath = true;
    },
    setRequestNewPath(state, action) {
      state.requestNewPath = action.payload;
    },
    setItemScanned(state, action) {
      state.itemScanned = action.payload;
    },
    addItemToCart(state, action) {
      const itemsToBeAdded = action.payload;
      state.confirmedItemsInCart = [...state.confirmedItemsInCart, ...itemsToBeAdded];
      state.items = state.items.reduce((acc, curr) => {
        const foundInShoppingList = itemsToBeAdded.filter((item) => curr.name === item.name);
        if (foundInShoppingList.length === 0) acc.push(curr);
        return acc;
      }, []);

      state.requestNewPath = true;
    },
  },
});
export const selectItems = (state) => state.shoppingList.items;
export const selectConfirmedItems = (state) => state.shoppingList.confirmedItemsInCart;

export const {
  removeItemFromList,
  addItemToList,
  addItemToCart,
  removeItemFromConfirmed,
  setRequestNewPath,
  populateShoppingList,
  addStepsToShoppingList,
  setItemScanned,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
