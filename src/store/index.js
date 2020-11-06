import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import mapReducer from '../features/map/mapSlice';
import shoppingListReducer from '../features/ShoppingList/shoppingListSlice';
import locationSelectReducer from '../features/welcomePage/locationSelectSlice';
import shopModeReducer from '../features/shopMode/shopModeSlice';
import itemsSlice from '../data/itemListSlice';

const reducer = combineReducers({
  map: mapReducer,
  shoppingList: shoppingListReducer,
  locationSelect: locationSelectReducer,
  shopMode: shopModeReducer,
  itemList: itemsSlice,
});

const store = configureStore({
  reducer,
});

export default store;
