const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/products', async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  await product.save();
  res.status(201).json(product);
});

// Get all products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// Update a product
router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const product = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
  res.status(200).json(product);
});

// Delete a product
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
