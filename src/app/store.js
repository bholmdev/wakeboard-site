import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
