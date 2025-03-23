import { FC, useEffect } from "react"
import productData from '../data/productList.json'
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchProductData } from "../store/features/product/productSlice";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};


const Home: FC = () => {
  const {list} = useSelector((state:RootState)=>state.product)
  const dispatch:AppDispatch =useDispatch()
  useEffect(()=>{
    dispatch(fetchProductData())
  },[])
  
  return (
    <main className="flex flex-wrap justify-center gap-14 p-4">{list.map((product: Product, _id: number) =>(
      <Product key={product.id} productId={product.id} title={product.title} price={product.price}  image={product.image} rating={product.rating}/>
    ))
    }</main>
  )
}

export default Home