import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import busketSlice from "./busketSlice";


export const store = configureStore({
    reducer: {
        productsSlice,
        busketSlice
    }
})
export default store