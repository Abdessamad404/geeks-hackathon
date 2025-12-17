const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products (with optional search & filters)
router.get('/products', productController.getAllProducts);

// Get single product by ID
router.get('/products/:id', productController.getProductById);

module.exports = router;