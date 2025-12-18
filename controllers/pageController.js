const Product = require("../models/Product");

// Render home page
exports.getHome = (req, res) => {
  res.render("home", {
    title: "Home",
  });
};

// Render products page with filters
exports.getProducts = async (req, res) => {
  try {
    // Build query from URL params
    let query = {};

    if (req.query.search) {
      query.name = { $regex: req.query.search, $options: "i" };
    }

    if (req.query.category) {
      query.category = req.query.category;
    }

    if (req.query.color) {
      query.color = req.query.color;
    }

    // Get products from database
    const products = await Product.find(query).sort({ createdAt: -1 });

    // Render page with data
    res.render("products", {
      title: "Products",
      products: products,
      search: req.query.search || "",
      category: req.query.category || "",
      color: req.query.color || "",
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Server error");
  }
};

// Render single product detail page
exports.getProductDetail = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.render("product-detail", {
      title: product.name,
      product: product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).send("Server error");
  }
};
