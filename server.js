const express = require("express");
const connectDB = require("./config/database");
const app = express();
const productRoutes = require("./routes/productRoutes");
const { engine } = require("express-handlebars");
const pageRoutes = require("./routes/pageRoutes");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");

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

//* Session configuration
app.use(
  session({
    secret: "vintage-vibe-secret-key-2025",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Make user available in all templates
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Middleware to parse JSON (like Laravel automatically does)
app.use(express.json());

// Middleware to parse form data (like Laravel automatically does)
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", productRoutes);

// Page Routes (must come AFTER API routes)
app.use("/", pageRoutes);

// Auth Routes
app.use("/", authRoutes);

// Start server
const PORT = 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
