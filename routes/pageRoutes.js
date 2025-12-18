const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// Home page
router.get("/", pageController.getHome);

// Products page
router.get("/products", pageController.getProducts);

// Product detail page
router.get("/products/:id", pageController.getProductDetail);

module.exports = router;
