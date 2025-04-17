import { configureStore } from "@reduxjs/toolkit";
import urlPathReducer from '../../application/redux-logic/slices/urlPathSlice';

export const store = configureStore({
    devTools: true,
    reducer: {
        urlPath: urlPathReducer
    }
})