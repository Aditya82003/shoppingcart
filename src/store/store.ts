import { configureStore } from "@reduxjs/toolkit";
import productSlice from './features/product/productSlice';
import cartSlice from './features/cart/cartSlice'

const store = configureStore({
    reducer: {
        productSlice,
        cartSlice
    }
})

export default store