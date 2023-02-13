import { configureStore } from '@reduxjs/toolkit';
import { parksReducer } from './features/parks/parksSlice';

export const store = configureStore({
    reducer: {
        parks: parksReducer,
    },
});