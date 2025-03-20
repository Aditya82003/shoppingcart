import { configureStore } from "@reduxjs/toolkit";
import productSlice from './features/product/productSlice';
import cartSlice from './features/cart/cartSlice'
import wishlistSlice from './features/wishlist/wishlistSlice'

const store = configureStore({
    reducer: {
        productSlice,
        cartSlice,
        wishlistSlice
    }
})

export default store