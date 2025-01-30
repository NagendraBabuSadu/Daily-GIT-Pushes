import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailData: {}
}


const userSlice = createSlice({
    name: 'user', // navigates to the store data
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.emailData = {...action.payload}
        }
    }
})

export const { setEmail } = userSlice.actions;
export default userSlice.reducer;