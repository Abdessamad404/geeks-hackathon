const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// Home page
router.get("/", pageController.getHome);

// Products page
router.get("/products", pageController.getProducts);

// Product detail page
router.get("/products/:id", pageController.getProductDetail);

// About page
router.get("/about", pageController.getAbout);

// Contact page
router.get("/contact", pageController.getContact);

// Handle contact form
router.post("/contact", pageController.postContact);

module.exports = router;
