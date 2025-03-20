import { RootState } from "../store/store"
import { FC } from "react"
import { useSelector } from "react-redux"
import Cart from "../components/cart"

const CartItems: FC = () => {
    const cart = useSelector((state: RootState) => state.cart)
    return (
        <div>
            {cart.map((item, index) => <Cart key={index} productId={item.productId} title={item.title} price={item.price} image={item.image} quantity={item.quantity} />)}
        </div>

    )
}

export default CartItems