// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
