import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type Item = {
    productId: number,
    title: string,
    price: number,
    image: string,
    rating: {
        rate: number,
        count: number
    },
    quantity: number
}
type CartItem = Item[]
type CartPayload = Omit<Item, "quantity"> & { quantity?: number };
type ChangeCartPayload = { productId: number };

const initialState: CartItem = []

const findItemIndex = (state: CartItem, productId: number): number => (
    state.findIndex((product) => product.productId === productId)
)
const cartSlice = createSlice({
    name: "cart",
    initialState,                                   //on first render it is just a empty array []  (it contains array of objects and that object have product data)
    reducers: {
        addCartItem(state, action: PayloadAction<CartPayload>) {
            const existingItemIndex = findItemIndex(state, action.payload.productId)
            if (existingItemIndex !== -1) state[existingItemIndex].quantity += 1
            else state.push({
                ...action.payload, quantity: 1
            })
        },
        removeCartItem(state, action: PayloadAction<ChangeCartPayload>) {
            const existingItemIndex = findItemIndex(state, action.payload.productId)
            state.splice(existingItemIndex, 1)
        },
        increaseCartItem(state, action: PayloadAction<ChangeCartPayload>) {
            const existingItemIndex = findItemIndex(state, action.payload.productId)
            state[existingItemIndex].quantity += 1
        },
        decreaseCartItem(state, action: PayloadAction<ChangeCartPayload>) {
            const existingItemIndex = findItemIndex(state, action.payload.productId)
            if (state[existingItemIndex].quantity === 1) {
                state.splice(existingItemIndex, 1)
            }
            else state[existingItemIndex].quantity -= 1
        }
    }
})

export const {
    addCartItem,
    removeCartItem,
    increaseCartItem,
    decreaseCartItem
} = cartSlice.actions

export const fetchCartState =(state: RootState) => state.cart

export default cartSlice.reducer