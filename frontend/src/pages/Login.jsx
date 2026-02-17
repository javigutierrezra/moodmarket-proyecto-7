import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { dispatch } = useContext(CartContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      })
      localStorage.setItem("token", res.data.token)
      alert("Login exitoso")
      navigate("/")
    } catch (err) {
      console.log(err)
      alert("Error en login")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default Login