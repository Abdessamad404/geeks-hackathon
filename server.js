const express = require("express");
const app = express();

// Middleware to parse JSON (like Laravel automatically does)
app.use(express.json());

// Basic route (like Route::get in Laravel)
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
