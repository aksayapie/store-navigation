import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

const startLoading = (state) => {
  state.isLoading = true;
};

const loadingFailed = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const itemListSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {
    getItemsStart: startLoading,
    getItemsSuccess(state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getItemsFailure: loadingFailed,
  },
});

// actions
export const { getItemsStart, getItemsSuccess, getItemsFailure } = itemListSlice.actions;

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch(getItemsStart());
    const { data } = await axios.get('https://cors-anywhere.herokuapp.com/http://safe-thicket-64926.herokuapp.com/items/');
    dispatch(getItemsSuccess(data.items));
  } catch (err) {
    dispatch(getItemsFailure(err.toString()));
  }
};

// selectors
export const selectItems = (state) => state.itemList.items;

export default itemListSlice.reducer;
