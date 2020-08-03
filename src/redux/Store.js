import {configureStore, createSlice, getDefaultMiddleware} from "@reduxjs/toolkit";
import {countReducer} from './slices/CountSlice'
import {checkParameterMiddleware} from './CheckParameterMiddleware';

const middleware = [
    ...getDefaultMiddleware(),
    checkParameterMiddleware
];

export const store = configureStore({
    reducer: {
        count: countReducer,
    },
    middleware,
});
