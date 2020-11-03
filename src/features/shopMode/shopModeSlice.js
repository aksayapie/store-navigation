import { createSlice } from '@reduxjs/toolkit';

const initialState = { currShopMode: '' };

export const shopModeSlice = createSlice({
  name: 'shopMode',
  initialState,
  reducers: {
    updateShopMode(state, action) {
      const newMode = action.payload;
      state.currShopMode = newMode;
    },
  },
});

// currShopMode is either 'safe' or 'quick' and those values are set
// in shopModeButton
export const currShopMode = (state) => state.shopMode.currShopMode;

export const { updateShopMode } = shopModeSlice.actions;

export default shopModeSlice.reducer;
