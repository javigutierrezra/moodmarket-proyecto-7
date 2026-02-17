import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Tu Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">No hay productos en el carrito.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item._id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </div>
          ))}
          <p className="text-xl font-bold mt-4">Total: ${total}</p>
          <button
            onClick={clearCart}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 mt-4"
          >
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart