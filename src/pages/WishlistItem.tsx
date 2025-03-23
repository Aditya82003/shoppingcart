import { FC } from "react"
import { useSelector } from "react-redux"
import Wishlist from "../components/Wishlist"
import { fetchWishlistState } from "../store/features/wishlist/wishlistSlice"

const WishlistItem:FC = () => {
  const wishlist =useSelector(fetchWishlistState)
  return (
    <div>{wishlist.map((item)=><Wishlist  productId={item.productId} title={item.title} price={item.price} image={item.image} rating={item.rating}/>)}</div>
  )
}

export default WishlistItem