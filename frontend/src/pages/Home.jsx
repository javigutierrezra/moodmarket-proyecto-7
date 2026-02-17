import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Catálogo MoodMarket
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {product.description}
            </p>

            <p className="text-lg font-bold mt-4">
              ${product.price}
            </p>

            <Link to={`/product/${product._id}`}>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Ver Producto
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home