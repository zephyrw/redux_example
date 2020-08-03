import {configureStore, createSlice, getDefaultMiddleware} from "@reduxjs/toolkit";
import {countReducer} from './slices/CountSlice'

const middleware = [
    ...getDefaultMiddleware(),
];

export const store = configureStore({
    reducer: {
        count: countReducer,
    },
    middleware,
});
