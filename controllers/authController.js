const User = require("../models/User");
const crypto = require("crypto");

// Show login page
exports.getLogin = (req, res) => {
  res.render("login", {
    title: "Login",
    message: req.query.message || null,
  });
};

// Handle login - send magic link
exports.postLogin = async (req, res) => {
  try {
    const { name, email } = req.body; // Add name here

    // Generate random token
    const magicToken = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name, email }); // Add name here
    } else {
      // Update name if user exists
      user.name = name;
    }

    // Save token
    user.magicToken = magicToken;
    user.tokenExpiry = tokenExpiry;
    await user.save();

    // Create magic link
    const magicLink = `http://localhost:3000/auth/verify?token=${magicToken}&email=${email}`;

    // In real app, send email here
    // For demo, we'll show the link on screen
    res.render("magic-link-sent", {
      title: "Check Your Email",
      magicLink: magicLink,
      email: email,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.redirect("/login?message=error");
  }
};

// Verify magic link and login user
exports.verifyMagicLink = async (req, res) => {
  try {
    const { token, email } = req.query;

    const user = await User.findOne({
      email: email,
      magicToken: token,
      tokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.redirect("/login?message=invalid");
    }

    // Clear token and update last login
    user.magicToken = null;
    user.tokenExpiry = null;
    user.lastLogin = new Date();
    await user.save();

    // Create session with name
    req.session.user = {
      id: user._id,
      name: user.name, // Add name here
      email: user.email,
    };

    res.redirect("/products?message=welcome");
  } catch (error) {
    console.error("Verify error:", error);
    res.redirect("/login?message=error");
  }
};

// Logout
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/?message=logged-out");
};
