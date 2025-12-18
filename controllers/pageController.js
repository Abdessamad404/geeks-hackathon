const Product = require("../models/Product");

// Render home page
exports.getHome = (req, res) => {
  res.render("home", {
    title: "Home",
  });
};

// Get all products with filters
exports.getProducts = async (req, res) => {
  try {
    // Redirect to login if not authenticated
    if (!req.session.user) {
      return res.redirect("/login");
    }

    // Build query based on filters
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

    const products = await Product.find(query).sort({ createdAt: -1 });

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

// Render about page
exports.getAbout = (req, res) => {
  res.render("about", {
    title: "About Us",
  });
};

// Render contact page
exports.getContact = (req, res) => {
  res.render("contact", {
    title: "Contact Us",
    message: req.query.message || null,
  });
};

// Handle contact form submission
exports.postContact = async (req, res) => {
  try {
    // In real app, send email or save to database
    console.log("Contact form submission:", req.body);

    // Redirect with success message
    res.redirect("/contact?message=success");
  } catch (error) {
    console.error("Contact form error:", error);
    res.redirect("/contact?message=error");
  }
};
