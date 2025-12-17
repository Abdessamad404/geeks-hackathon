const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const pageController = require("../controllers/pageController");

// Get all products (with optional search & filters)
router.get("/products", productController.getAllProducts);

// Get single product by ID
router.get("/products/:id", productController.getProductById);

//* Render home page
router.get("/", pageController.getHome);

//* Render products page with filters
router.get("/products-page", pageController.getProducts);

module.exports = router;
