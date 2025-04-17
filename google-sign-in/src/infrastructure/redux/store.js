import { configureStore } from "@reduxjs/toolkit";
import googleDetailsReducer from '../../application/redux-logic/slices/googleDetailsSlice'

export const store = configureStore({
    devTools: true,
    reducer: {
        googleDetails: googleDetailsReducer
    }
})