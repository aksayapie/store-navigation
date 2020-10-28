import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counterReducer from '../features/counter/counterSlice';
import shoppingListReducer from '../features/ShoppingList/shoppingListSlice';
// import postReducer from '../redux/reducer';

const reducer = combineReducers({
  counter: counterReducer,
  shoppingList: shoppingListReducer,
});
const store = configureStore({
  reducer,
});

export default store;
