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
    console.log({image})
    return (<>
        <div>{title}-{quantity}-${price}</div>
        <button onClick={() => dispatch(removeCartItem({ productId }))}>Remove</button>
        <button onClick={() => dispatch(increaseCartItem({ productId }))}>+</button>
        <button onClick={() => dispatch(decreaseCartItem({ productId }))}>-</button>
    </>
    )
}

export default Cart