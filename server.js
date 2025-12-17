const express = require("express");
const connectDB = require("./config/database");
const app = express();
const productRoutes = require("./routes/productRoutes");
const { engine } = require('express-handlebars');

// Setup Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Static files (CSS, images, etc.) 
app.use(express.static('public'));

// Middleware to parse JSON (like Laravel automatically does)
app.use(express.json());

// API Routes
app.use("/api", productRoutes);

// Basic route (like Route::get in Laravel)
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Start server
const PORT = 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
