import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  path: [
    { lat: 40.65594109366914, lng: -74.0089620879963 },
    { lat: 40.655826126289085, lng: -74.0091069272831 },
    { lat: 40.65603266046727, lng: -74.00947170770912 },
    { lat: 40.65590853655506, lng: -74.0096125236824 },
    { lat: 40.65548224037677, lng: -74.00887893951683 },
    { lat: 40.65571014129782, lng: -74.00864424622803 },
    { lat: 40.65580170841294, lng: -74.008818589814 },
  ],
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    removeFirstPath: (state) => {
      state.path = state.path.filter((_, i) => i !== 0);
    },
  },
});

// actions
export const { removeFirstPath } = mapSlice.actions;

// selectors
export const selectPath = (state) => state.map.path;

export default mapSlice.reducer;
