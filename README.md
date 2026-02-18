📦 MoodMarket

MoodMarket es una aplicación web tipo e-commerce donde los usuarios pueden explorar productos según su estado de ánimo (mood) y agregarlos al carrito de compras.

⸻

🚀 Tecnologías utilizadas

Frontend
	•	React
	•	React Router
	•	Context API (para el carrito)
	•	Tailwind CSS
	•	Axios

Backend
	•	Node.js
	•	Express
	•	MongoDB
	•	Mongoose

✨ Funcionalidades
	•	🔎 Ver catálogo de productos
	•	🎭 Filtrar productos por mood
	•	📄 Ver detalle de producto
	•	🛒 Agregar productos al carrito
	•	❌ Eliminar productos del carrito
	•	🧹 Vaciar carrito
	•	👤 Registro y login de usuario

  🛒 Sistema de Carrito

El carrito está implementado usando Context API de React.
	•	CartContext maneja el estado global del carrito.
	•	CartProvider envuelve la aplicación.
	•	Se utiliza useReducer para manejar:
	•	Agregar producto
	•	Eliminar producto
	•	Vaciar carrito
🗄 Base de Datos

Los productos se almacenan en MongoDB con la siguiente estructura:
{
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  moods: [String],
  stock: Number
}

▶️ Cómo ejecutar el proyecto

1️⃣ Backend
cd backend
npm install
npm run dev

El servidor corre en:
http://localhost:5001

2️⃣ Frontend
cd frontend
npm install
npm run dev

La aplicación corre en:
http://localhost:5173

🧠 Aprendizajes

Durante el desarrollo se trabajó con:
	•	Manejo de estado global con Context
	•	Debugging de problemas de duplicación de contexto
	•	Conexión frontend-backend
	•	Manejo de rutas dinámicas
	•	Uso de MongoDB Compass

