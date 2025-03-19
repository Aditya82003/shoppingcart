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
    quantity: number
}
type CartItem = Item[]
type CartPayload = {
    productId: number,
    title: string,
    price: number,
    image: string,
    rating: {
        rate: number,
        count: number
    },
    quantity?: number
}

const initialState: CartItem = []

const findItemIndex = (state: CartItem, action: PayloadAction<CartPayload>): number => (
    state.findIndex((product) => product.productId === action.payload.productId)
)
const cartSlice = createSlice({
    name: "cart",
    initialState,                                   //on first render it is just a empty array []  (it contains array of objects and that object have product data)
    reducers: {
        addCartItem(state, action: PayloadAction<CartPayload>) {
            const existingItemIndex = findItemIndex(state, action)
            if (existingItemIndex !== -1) state[existingItemIndex].quantity += 1
            else state.push({
                ...action.payload,quantity:1
            })
        },
        removeCartItem(state, action: PayloadAction<CartPayload>) {
            const existingItemIndex = findItemIndex(state, action)
            state.splice(existingItemIndex, 1)
        },
        increaseCartItem(state,action:PayloadAction<CartPayload>){
            const existingItemIndex =findItemIndex(state, action)
            state[existingItemIndex].quantity+=1
        },
        decreaseCartItem(state,action:PayloadAction<CartPayload>){
            const existingItemIndex =findItemIndex(state, action)
            if(state[existingItemIndex].quantity===1){
                state.splice(existingItemIndex, 1)
            }
            else state[existingItemIndex].quantity-=1
        }
    }
})

export const {
    addCartItem,
    removeCartItem,
    increaseCartItem
} = cartSlice.actions

export default cartSlice.reducer