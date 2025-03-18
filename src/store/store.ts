import { configureStore } from "@reduxjs/toolkit";
import productSlice from './features/product/productSlice';

const store = configureStore({
    reducer: {
        productSlice,
        
    }
})

export default store