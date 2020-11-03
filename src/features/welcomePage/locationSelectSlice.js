import { createSlice } from '@reduxjs/toolkit';

const initialState = { currentLocation: ' Chicago' };

export const locationSelectSlice = createSlice({
  name: 'locationSelect',
  initialState,
  reducers: {
    updateLocation(state, action) {
      const newLoc = action.payload;
      state.currentLocation = newLoc;
    },
  },
});
export const currLoc = (state) => state.locationSelect.currentLocation;

export const { updateLocation } = locationSelectSlice.actions;

export default locationSelectSlice.reducer;
