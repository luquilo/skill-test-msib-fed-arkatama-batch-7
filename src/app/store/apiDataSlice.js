import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blog: [],
    news: [],
    portofolio: []
}

export const apiDataSlice = createSlice({
    name: 'apiData',
    initialState,
    reducers: {
        fetchBlog: (state, action) => {
            state.blog = action.payload
        },
        fetchNews: (state, action) => {
            state.news = action.payload
        },
        fetchPortofolio: (state, action) => {
            state.portofolio = action.payload
        },
    }
})

export const {toogleGluten, addTopping} = pizzaSlice.actions

export default pizzaSlice.reducer
