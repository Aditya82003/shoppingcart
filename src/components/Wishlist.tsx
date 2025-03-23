import { FC } from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { removeWishlistItem } from "../store/features/wishlist/wishlistSlice";

type WishlistProps={
    productId: number,
    title: string,
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const Wishlist:FC<WishlistProps> = ({productId,title,price,image,rating}) => {
    const dispatch: AppDispatch =useDispatch()
    console.log(price,rating)
  return (<>
  <div className="flex border-b-2 border-gray-400 my-4 py-4 gap-2 w-full items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4  sm:items-start">
                  <img className="w-[100px] sm:mr-4" src={image} alt={title} />
                  <p className="max-w-[200px] text-lg font-medium">Product Name: {title}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2  justify-center">
                  <button className="text-lg font-medium border-2  px-2 py-1 bg-blue-400 text-white  rounded-md  hover:bg-blue-700 active:bg-blue-400" onClick={() => dispatch(removeWishlistItem({ productId }))}>Remove</button>
                  
              </div>
          </div>
          <div>
  
          </div>
  
  </>
    
  )
}

export default Wishlist