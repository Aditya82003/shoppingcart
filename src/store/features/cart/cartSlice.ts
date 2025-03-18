import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}
type CartItem = Item[]
type CartPayload={
    productID:number
}


const initialState:CartItem=[]

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state,action:PayloadAction<CartPayload>){
            
        }
    }
})

export default cartSlice.reducer