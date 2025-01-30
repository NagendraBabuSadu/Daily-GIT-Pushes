import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}


const resumeSlice = createSlice({
    name: 'profileDetails', // navigates to the store data
    initialState,
    reducers: {
        setUserDispatch: (state, action) => {
            const keys = Object.keys(action.payload)
            // console.log("......keys", keys)
            state.user = action.payload;
            // console.log("actionPayload", action.payload)
        }
    }
})

export const { setUserDispatch } = resumeSlice.actions;
export default resumeSlice.reducer;