import { configureStore } from "@reduxjs/toolkit";
import productSlice from './features/product/productSlice';
import cartSlice from './features/cart/cartSlice'
import wishlistSlice from './features/wishlist/wishlistSlice'

const store = configureStore({
    reducer: {
        product:productSlice,
        cart:cartSlice,
        wishlist:wishlistSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store