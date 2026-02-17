const express = require("express")
const router = express.Router()
const Product = require("../models/Product")
const verifyToken = require("../middleware/auth.middleware")

// Crear producto (protegida)
router.post("/", verifyToken, async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(201).json(product)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Obtener todos los productos (pública)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Obtener producto por ID (pública)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router