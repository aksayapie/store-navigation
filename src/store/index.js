import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import mapReducer from '../features/map/mapSlice';
import directionReducer from '../features/directions/directionSlice';
import shoppingListReducer from '../features/ShoppingList/shoppingListSlice';
import locationSelectReducer from '../features/welcomePage/locationSelectSlice';
import shopModeReducer from '../features/shopMode/shopModeSlice';

const reducer = combineReducers({
  map: mapReducer,
  direction: directionReducer,
  shoppingList: shoppingListReducer,
  locationSelect: locationSelectReducer,
  shopMode: shopModeReducer,
});
// import postReducer from '../redux/reducer';

const store = configureStore({
  reducer,
});

export default store;
