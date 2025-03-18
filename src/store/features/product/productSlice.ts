import { createSlice } from '@reduxjs/toolkit';
import productData from '../../../data/productList.json'


type Product = {
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

type ProductData =Product[]

const initialState: ProductData = productData

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}
})

export default productSlice.reducer