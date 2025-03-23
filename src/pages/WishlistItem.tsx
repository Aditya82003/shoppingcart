import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import Wishlist from "../components/Wishlist"

const WishlistItem:FC = () => {
  const wishlist =useSelector((state:RootState)=>state.wishlist)
  return (
    <div>{wishlist.map((item)=><Wishlist  productId={item.productId} title={item.title} price={item.price} image={item.image} rating={item.rating}/>)}</div>
  )
}

export default WishlistItem