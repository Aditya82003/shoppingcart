import Home from "./pages/Home"

function App() {
  return (
    <>
      <header className="bg-blue-400 flex justify-between items-center px-6 py-4 mb-4">
        <h1 className="text-5xl font-bold">Shoppy</h1>
        <p className="text-3xl font-bold">Cart</p>
      </header>
      <Home/>
    </>
  )
}

export default App
