import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import shoppingListReducer from '../features/ShoppingList/shoppingListSlice';
// import postReducer from '../redux/reducer';

const reducer = combineReducers({
  shoppingList: shoppingListReducer,
});
const store = configureStore({
  reducer,
});

export default store;
