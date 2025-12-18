const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Show login page
router.get("/login", authController.getLogin);

// Handle login submission
router.post("/login", authController.postLogin);

// Verify magic link
router.get("/auth/verify", authController.verifyMagicLink);

// Logout
router.get("/logout", authController.logout);

module.exports = router;
