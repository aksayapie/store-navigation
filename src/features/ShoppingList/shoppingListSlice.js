import { createSlice } from '@reduxjs/toolkit';
import items from '../../data/tempData';

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items,
  },
  reducers: {
    remoteItemFromList(state, action) {
      const { UPC } = action.payload;
      const indexOfCurrentPost = state.items.indexOf(state.items.find((item) => item.UPC === UPC));
      // console.log(indexOfCurrentPost);
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
  },
});
export const selectItems = (state) => state.shoppingList.items;

export const { remoteItemFromList, addItemToList } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
