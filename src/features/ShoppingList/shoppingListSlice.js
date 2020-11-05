import { createSlice } from '@reduxjs/toolkit';
import items from '../../data/tempData';

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items,
    confirmedItemsInCart: [],
  },
  reducers: {
    remoteItemFromConfirmed(state, action) {
      const { UPC } = action.payload;
      const indexOfCurrentPost = state.confirmedItemsInCart.indexOf(
        state.confirmedItemsInCart.find((item) => item.UPC === UPC),
      );
      state.confirmedItemsInCart = [...state.confirmedItemsInCart.slice(0, indexOfCurrentPost),
        ...state.confirmedItemsInCart.slice(indexOfCurrentPost + 1)];
    },
    remoteItemFromList(state, action) {
      const { UPC } = action.payload;
      const indexOfCurrentPost = state.items.indexOf(state.items.find((item) => item.UPC === UPC));
      state.items = [...state.items.slice(0, indexOfCurrentPost),
        ...state.items.slice(indexOfCurrentPost + 1)];
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
    },
    addItemToCart(state, action) {
      const itemsToBeAdded = action.payload;
      Object.keys(itemsToBeAdded).forEach(
        (key) => {
          const found = state.confirmedItemsInCart.findIndex(
            (element) => element.UPC === itemsToBeAdded[key].UPC,
          );
          if (found < 0) {
            const indexOfCurrentPost = state.items.indexOf(
              state.items.find((item) => item.UPC === itemsToBeAdded[key].UPC),
            );
            if (indexOfCurrentPost > -1) {
              state.items = [...state.items.slice(0, indexOfCurrentPost),
                ...state.items.slice(indexOfCurrentPost + 1)];
            }
            state.confirmedItemsInCart.push(itemsToBeAdded[key]);
          }
        },
      );
    },
  },
});
export const selectItems = (state) => state.shoppingList.items;
export const selectConfirmedItems = (state) => state.shoppingList.confirmedItemsInCart;

export const {
  remoteItemFromList, addItemToList, addItemToCart, remoteItemFromConfirmed,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
