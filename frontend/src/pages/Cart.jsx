import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function Cart() {
  const { cart, dispatch } = useContext(CartContext)

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-8">Tu Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Tu carrito está vacío. <Link to="/" className="text-blue-500 underline">Volver al catálogo</Link>
        </p>
      ) : (
        <div className="grid gap-6">
          {cart.map(item => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                  <p className="text-gray-500">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item._id })}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-2xl font-bold">Total: ${total}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart