import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentDirection: null,
};

// TODO: this slice may not be necessary, could be moved to mapSlice.
// Directions could be part of the path array.
export const directionSlice = createSlice({
  name: 'direction',
  initialState,
  reducers: {
    setCurrentDirection: (state, action) => {
      state.currentDirection = action.payload;
    },
  },
});

// actions
export const { setCurrentDirection } = directionSlice.actions;

// selectors
export const { selectCurrentDirection } = (state) => state.direction.currentDirection;

export default directionSlice.reducer;
