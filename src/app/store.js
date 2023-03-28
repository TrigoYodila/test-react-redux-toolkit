import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/author/authorSlice'

export const store = configureStore({
    reducer:{
        user:userReducer,
    }
})
