import { FC } from "react"
import star from '../assets/star.png';
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/features/cart/cartSlice";


type ProductCompProps = {
    productId: number,
    title: string,
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const Product: FC<ProductCompProps> = ({ productId, title, price, image, rating }) => {
    const dispatch = useDispatch();
    return (
        <div key={productId} className="flex flex-col items-center border-2 rounded-md p-4  w-[300px]">
            <img className="h-[200px] max-h-[200px] py-4" src={image} />
            <h1 className="font-medium text-md mt-4 min-h-[80px] text-center">{title}</h1>
            <div className="flex justify-between w-full mt-4">
                <p className="flex items-center gap-2 text-xl font-medium">{rating.rate}<img className="w-4 h-4" src={star}/></p>
                <p className="font-medium text-xl">&#36; {price}</p>
            </div>
            <div className="flex w-full justify-between mt-6 ">
                <button className="border-2 p-2  rounded-md bg-slate-200 hover:scale-105 active:scale-100" onClick={()=>dispatch(addCartItem({ productId, title, rating, price, image }))}>Add to Cart</button>
                <button className="border-2 p-2  rounded-md bg-slate-200 hover:scale-105 active:scale-100">Add to Wishlist</button>
            </div>
        </div>
    )
}

export default Product