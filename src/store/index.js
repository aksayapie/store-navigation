import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counterReducer from '../features/counter/counterSlice';

const reducer = combineReducers({
  counter: counterReducer,
});
const store = configureStore({
  reducer,
});

export default store;
