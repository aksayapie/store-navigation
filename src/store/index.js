import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import mapReducer from '../features/map/mapSlice';
import directionReducer from '../features/directions/directionSlice';
import shoppingListReducer from '../features/ShoppingList/shoppingListSlice';

const reducer = combineReducers({
  map: mapReducer,
  direction: directionReducer,
  shoppingList: shoppingListReducer,
});
// import postReducer from '../redux/reducer';

const store = configureStore({
  reducer,
});

export default store;
