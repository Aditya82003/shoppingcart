import { createSlice } from '@reduxjs/toolkit';
import productData from '../../../data/productList.json'
import { AppDispatch } from '../../store';


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

type ProductData ={
    loading: true|false,
    list:Product[],
    error:string
}

const initialState: ProductData = {
    loading:false,
    list:[],
    error:""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProducts(state){
            state.loading=true
        },
        fetchProductError(state){
            state.loading=false,
            state.error="Something went wrong"
        },
        updateAllProduct(state,action){
            state.loading=false
            state.list=action.payload
        }

    }
})

export const fetchProductData =()=>(dispatch:AppDispatch)=>{
    dispatch(fetchProducts())
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        dispatch(updateAllProduct(data))
    })
    .catch(()=>{
        dispatch(fetchProductError())
    })
}

export const { fetchProducts, fetchProductError, updateAllProduct } = productSlice.actions;

export default productSlice.reducer

