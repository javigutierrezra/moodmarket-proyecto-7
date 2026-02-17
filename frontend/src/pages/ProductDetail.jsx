import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { CartContext } from "../context/CartContext"

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [id])

  if (!product) return <p className="text-center mt-10">Cargando...</p>

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col md:flex-row gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-96 object-cover rounded-lg"
      />

      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-6">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductDetail