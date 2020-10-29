import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import mapReducer from '../features/map/mapSlice';

const reducer = combineReducers({
  map: mapReducer,
});
const store = configureStore({
  reducer,
});

export default store;
