const express = require("express");
import { helpers } from "./node_modules/handlebars/types/index.d";
import { equals } from "./node_modules/sift/src/utils";
const connectDB = require("./config/database");
const app = express();
const productRoutes = require("./routes/productRoutes");
const { engine } = require("express-handlebars");

// Setup Handlebars template engine with custom helpers 
app.engine(
  "handlebars",
  engine({
    helpers: {
      eq: (a, b) => a === b,
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
