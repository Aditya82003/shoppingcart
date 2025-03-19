import { FC } from "react"
import productData from '../data/productList.json'
import Product from "../components/Product";

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
  return (
    <main className="flex flex-wrap justify-center gap-14 p-4">{productData.map((product: Product, _id: number) =>(
      <Product key={product.id} productId={product.id} title={product.title} price={product.price}  image={product.image} rating={product.rating}/>
    ))
    }</main>
  )
}

export default Home