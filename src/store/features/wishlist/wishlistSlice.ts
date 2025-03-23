import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
    productId: number,
    title: string,
    price: number,
    image: string,
    rating: {
        rate: number,
        count: number
    },

}
type WishlistItem = Item[]
type WishListPayload = {
    productId: number,
    title: string,
    price: number,
    image: string,
    rating: {
        rate: number,
        count: number
    },

}

type ChangeWishlist={
    productId:number
}

const initialState: WishlistItem = []

const findItemIndex = (state: WishlistItem, productId:number): number => (
    state.findIndex((product) => product.productId === productId)
)

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addWishlistItem(state, action: PayloadAction<WishListPayload>) {
            state.push({ ...action.payload })
        },
        removeWishlistItem(state, action: PayloadAction<ChangeWishlist>) {
            const existingItemIndex = findItemIndex(state, action.payload.productId)
            if (existingItemIndex !== -1)
                state.splice(existingItemIndex, 1)
        }

    }
})

export const {
    addWishlistItem,
    removeWishlistItem
} = wishlistSlice.actions

export default wishlistSlice.reducer