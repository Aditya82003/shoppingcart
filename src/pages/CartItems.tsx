import { RootState } from "../store/store"
import { FC } from "react"
import { useSelector } from "react-redux"
import Cart from "../components/Cart"

const CartItems: FC = () => {

    const cart = useSelector((state: RootState) => state.cart)
    const totalPrice = cart.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.quantity, 0)
    return (
        <div className="px-4 ">
            {cart.map((item, index) => <Cart key={index} productId={item.productId} title={item.title} price={item.price} image={item.image} quantity={item.quantity} />)}
            <div className="text-end text-xl sm:text-3xl  font-bold w-full mt-4"><span className="text-blue-400 sm:mr-12"> Total price:</span> $ {Math.round(totalPrice)}</div>
        </div>

    )
}

export default CartItems