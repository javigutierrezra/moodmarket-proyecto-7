const express = require("express")
const cors = require("cors")
const productRoutes = require("./routes/product.routes")
const mongoose = require("mongoose")
require("dotenv").config()

const authRoutes = require("./routes/auth.routes")
const verifyToken = require("./middleware/auth.middleware")

const app = express()

// Middlewares globales
app.use(cors())
app.use(express.json())

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

// Rutas públicas
app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)

app.get("/", (req, res) => {
  res.send("MoodMarket API running")
})

// Ruta protegida
app.get("/api/profile", verifyToken, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user
  })
})

module.exports = app