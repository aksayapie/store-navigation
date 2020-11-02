import { createSlice } from '@reduxjs/toolkit';
import items from '../../data/tempData';

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items,
  },
  reducers: {
    remoteItemFromList(state, action) {
      const { id } = action.payload;
      const indexOfCurrentPost = state.items.indexOf(state.items.find((item) => item.id === id));
      console.log(indexOfCurrentPost);
      state.items = [...state.items.slice(0, indexOfCurrentPost),
        ...state.items.slice(indexOfCurrentPost + 1)];
    },
  },
});
export const selectItems = (state) => state.shoppingList.items;

export const { remoteItemFromList } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
