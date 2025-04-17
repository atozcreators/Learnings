import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const urlPathSlice = createSlice({
    name: 'urlPath',
    initialState: initialState,
    reducers: {
        addUrlPath(state, action){
            return action.payload;
        }
    }
})

export const {addUrlPath} = urlPathSlice.actions;

export default urlPathSlice.reducer;