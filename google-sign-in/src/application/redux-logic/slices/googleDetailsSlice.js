import { createSlice } from "@reduxjs/toolkit";

const initialstate = {};

const googleDetailsSlice = createSlice({
    name: 'googleDetails',
    initialState: initialstate,
    reducers:{
        addGoogleDetails(state, action){
            Object.assign(state, action.payload)
        }
    }

})

export const {addGoogleDetails} = googleDetailsSlice.actions;
export default googleDetailsSlice.reducer;