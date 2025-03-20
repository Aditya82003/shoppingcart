import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import CartItems from "./pages/CartItems"
import Header from "./components/Header"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<CartItems />} />
      </Routes>
    </>
  )
}

export default App
