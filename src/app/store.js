import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { parksReducer } from './features/parks/parksSlice';
import { commentsReducer } from './features/comments/commentsSlice';
import { sponsorsReducer } from './features/sponsors/sponsorSlice';
import { promotionsReducer } from './features/promotions/promotionsSlice';
import { userReducer } from './features/user/userSlice';

export const store = configureStore({
    reducer: {
        parks: parksReducer,
        comments: commentsReducer,
        sponsors: sponsorsReducer,
        promotions: promotionsReducer,
        user: userReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger])
});