import { configureStore } from '@reduxjs/toolkit';
import { parksReducer } from './features/parks/parksSlice';
import { commentsReducer } from './features/comments/commentsSlice';
import { sponsorsReducer } from './features/sponsors/sponsorSlice';
import { promotionsReducer } from './features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        parks: parksReducer,
        comments: commentsReducer,
        sponsors: sponsorsReducer,
        promotions: promotionsReducer
    },
});