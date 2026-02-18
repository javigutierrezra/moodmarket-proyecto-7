import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { CartContext } from "../context/CartContext"

function Home() {
  const [products, setProducts] = useState([])
  const [selectedMood, setSelectedMood] = useState("all")
  const { addToCart } = useContext(CartContext)

  // Traer productos desde backend
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then(res => {
        setProducts(res.data)
        console.log("Productos cargados desde backend:", res.data)
      })
      .catch(err => console.log(err))
  }, [])

  // Filtrar productos por mood
  const filteredProducts =
    selectedMood === "all"
      ? products
      : products.filter(product =>
          product.moods?.map(m => m.toLowerCase()).includes(selectedMood)
        )

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Catálogo MoodMarket
      </h2>

      {/* Filtros por Mood */}
      <div className="mb-6 flex gap-4 flex-wrap">
        <button
          onClick={() => setSelectedMood("all")}
          className={`px-4 py-2 rounded ${
            selectedMood === "all" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Todos
        </button>

        <button
          onClick={() => setSelectedMood("feliz")}
          className={`px-4 py-2 rounded ${
            selectedMood === "feliz"
              ? "bg-yellow-400 text-white"
              : "bg-yellow-200"
          }`}
        >
          Feliz
        </button>

        <button
          onClick={() => setSelectedMood("relajado")}
          className={`px-4 py-2 rounded ${
            selectedMood === "relajado"
              ? "bg-green-400 text-white"
              : "bg-green-200"
          }`}
        >
          Relajado
        </button>

        <button
          onClick={() => setSelectedMood("energetico")}
          className={`px-4 py-2 rounded ${
            selectedMood === "energetico"
              ? "bg-red-400 text-white"
              : "bg-red-200"
          }`}
        >
          Energético
        </button>

        <button
          onClick={() => setSelectedMood("triste")}
          className={`px-4 py-2 rounded ${
            selectedMood === "triste"
              ? "bg-blue-400 text-white"
              : "bg-blue-200"
          }`}
        >
          Triste
        </button>
      </div>

      {/* Grid de productos */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
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

              {/* Botón agregar al carrito CORRECTO */}
              <button
                onClick={() => {
                  console.log("Agregando al carrito:", product)
                  addToCart(product)
                }}
                className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              >
                Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-3 text-center mt-10">
            No hay productos para este mood.
          </p>
        )}
      </div>
    </div>
  )
}

export default Home