import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import CartItems from "./pages/CartItems"
import Header from "./components/Header"
import Wishlist from "./pages/Wishlist"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<CartItems />} />
        <Route path="wishlist" element={<Wishlist/>}/>
      </Routes>
    </>
  )
}

export default App
