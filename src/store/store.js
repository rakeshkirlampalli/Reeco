import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
const store=configureStore({
    reducer:{
        cart:productSlice,
    }
})
export default store