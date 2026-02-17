import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">MoodMarket</h1>
        <div>
          <Link
            to="/"
            className="mr-4 text-gray-700 hover:text-black transition"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="mr-4 text-gray-700 hover:text-black transition"
          >
            Carrito
          </Link>
          <Link
            to="/login"
            className="mr-4 text-gray-700 hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-700 hover:text-black transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App