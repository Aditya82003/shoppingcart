import { Link } from "react-router"
import cartIcon from '../assets/grocery-store.png'
import wishlistIcon from '../assets/wishlist.png'

const Header = () => {
    return (
        <header className="flex justify-between w-full bg-blue-400 py-4 px-6">
            <Link className="text-2xl font-bold" to="/">Shoppy</Link>
            <div className="flex gap-6">
                <img src={wishlistIcon} />
                <Link className=" flex gap-2 text-xl min-w-[50px]" to="cart"><img src={cartIcon} /></Link>
            </div>

        </header>
    )
}

export default Header