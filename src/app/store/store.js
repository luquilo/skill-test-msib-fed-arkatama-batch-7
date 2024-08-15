import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from './apiDataSlice'

export const store = configureStore({
    reducer:{
        apiData: apiDataReducer,
    }
})
