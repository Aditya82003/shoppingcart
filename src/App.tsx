import { Link, Route, Routes } from "react-router"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <header className="bg-blue-400 flex justify-between items-center px-6 py-4 mb-4">
        <Link className="text-5xl font-bold" to="/">Shoppy</Link>
        <Link className="text-5xl font-bold" to="/cart">Cart</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Home />} />
      </Routes>


    </>
  )
}

export default App
