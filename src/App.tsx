import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import CartItems from "./pages/CartItems"
import Header from "./components/Header"
import WishlistItem from "./pages/WishlistItem"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<CartItems />} />
        <Route path="wishlist" element={<WishlistItem/>}/>
      </Routes>
    </>
  )
}

export default App
