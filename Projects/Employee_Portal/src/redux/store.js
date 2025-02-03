import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice'
import resumeReducer from '../slices/resumeSlice';

export const store = configureStore({
    reducer: {
        email: userReducer, 
        resumeProfile: resumeReducer
    }
})

