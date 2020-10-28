import { createSlice } from '@reduxjs/toolkit';
import items from '../../data/tempData';

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items,
  },
  reducers: {

  },
});
export const selectItems = (state) => state.shoppingList.items;

export default shoppingListSlice.reducer;
