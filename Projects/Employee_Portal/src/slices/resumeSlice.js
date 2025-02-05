import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}


const resumeSlice = createSlice({
    name: 'profileDetails', // navigates to the store data
    initialState,
    reducers: {
        setUserDispatch: (state, action) => {
            console.log("-----> ", action.payload )
            const keys = Object.keys(action.payload)         
            state.user = action.payload; 
        }, 
    }
})

export const { setUserDispatch } = resumeSlice.actions;
export default resumeSlice.reducer;