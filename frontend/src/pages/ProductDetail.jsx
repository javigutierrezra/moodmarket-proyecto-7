import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { dispatch } = useContext(CartContext)

  useEffect(() => {
    axios.get(`http://localhost:5001/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [id])

  if (!product) return <p className="p-8">Cargando...</p>

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />

        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <p className="text-gray-500 mt-4">
            {product.description}
          </p>

          <p className="text-2xl font-bold mt-6">
            ${product.price}
          </p>

          <button
  onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
  className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
>
  Agregar al carrito
</button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail