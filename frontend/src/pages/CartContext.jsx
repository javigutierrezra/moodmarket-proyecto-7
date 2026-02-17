import { createContext, useReducer } from "react"

// 1️⃣ Crear el contexto
export const CartContext = createContext()

// 2️⃣ Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] }
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item._id !== action.payload) }
    case "CLEAR_CART":
      return { ...state, cart: [] }
    default:
      return state
  }
}

// 3️⃣ Estado inicial
const initialState = {
  cart: []
}

// 4️⃣ Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product })
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id })
  const clearCart = () => dispatch({ type: "CLEAR_CART" })

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}