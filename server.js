const express = require("express");
const connectDB = require("./config/database");
const app = express();
const productRoutes = require("./routes/productRoutes");
const { engine } = require("express-handlebars");
const pageRoutes = require("./routes/pageRoutes");

// Setup Handlebars template engine with custom helpers
app.engine(
  "handlebars",
  engine({
    helpers: {
      eq: (a, b) => a === b,
    },
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.set("view engine", "handlebars");
app.set("views", "./views");

// Static files (CSS, images, etc.)
app.use(express.static("public"));

// Middleware to parse JSON (like Laravel automatically does)
app.use(express.json());

// API Routes
app.use("/api", productRoutes);

// Page Routes (must come AFTER API routes)
app.use("/", pageRoutes);

// Start server
const PORT = 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
