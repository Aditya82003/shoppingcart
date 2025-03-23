import { createSlice } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '../../store';


export type Product = {
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

type ProductData = {
    loading: boolean,
    list: Product[],
    error: string | null
}

const initialState: ProductData = {
    loading: false,
    list: [],
    error: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProducts(state) {
            state.loading = true
        },
        fetchProductError(state, action) {
            state.loading = false,
                state.error = action.payload || "Something went wrong"
        },
        updateAllProduct(state, action) {
            state.loading = false
            state.list = action.payload
        }
    }
})

export const fetchProductData = () => async (dispatch: AppDispatch) => {                                    //Thunk.............
    dispatch(productSlice.actions.fetchProducts())
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        dispatch(productSlice.actions.updateAllProduct(data))
    } catch (err: any) {
        dispatch(productSlice.actions.fetchProductError(err.message || 'Something went wrong'));

    }
}

export const fetchProductList = (state:RootState)=>state.product


export default productSlice.reducer

