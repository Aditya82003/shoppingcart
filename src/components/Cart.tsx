import { FC } from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { decreaseCartItem, increaseCartItem, removeCartItem } from "../store/features/cart/cartSlice";

type CartProps = {
    productId: number,
    title: string,
    price: number;
    image: string;
    quantity: number
}

const Cart: FC<CartProps> = ({ productId, title, price, image, quantity }) => {
    const dispatch: AppDispatch = useDispatch()
    return (<>
        <div className="flex border-b-2 border-gray-400 my-4 py-4 gap-2 w-full items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4  sm:items-start">
                <img className="w-[100px] sm:mr-4" src={image} alt={title} />
                <p className="max-w-[200px] text-lg font-medium">Product Name: {title}</p>
                <p className="text-lg font-medium sm:ml-8">Quantity: {quantity}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2  justify-center">
                <button className="text-lg font-medium border-2  px-2 py-1 bg-blue-400 text-white  rounded-md  hover:bg-blue-700 active:bg-blue-400" onClick={() => dispatch(removeCartItem({ productId }))}>Remove</button>
                <div className="flex gap-2">
                    <button className="min-w-[45px] text-lg  font-medium border-2  px-2 py-1 bg-blue-400 text-white  rounded-md hover:bg-blue-700 active:bg-blue-400" onClick={() => dispatch(increaseCartItem({ productId }))}>+</button>
                    <button className="min-w-[45px] text-lg font-medium border-2  px-2 py-1 bg-blue-400 text-white  rounded-md  hover:bg-blue-700 active:bg-blue-400" onClick={() => dispatch(decreaseCartItem({ productId }))}>-</button>
                </div>
                <p className="text-center text-lg font-medium min-w-[100px] ">$ {Math.round(price * quantity)}</p>
            </div>
        </div>
        <div>

        </div>
    </>
    )
}

export default Cart