import { FC } from "react"
import productData from '../data/productList.json'

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
    <div>{productData.map((product: Product, id: number) => (
      <div key={id}>
        <h1>{product.title}</h1>
        <img className="w-[100px]" src={product.image} alt={product.title}/>
        <p>&#36; {product.price}</p>
        <p>Rating {product.rating.rate}&#128948;  </p>
      </div>
    ))
    }</div>
  )
}

export default Home