const User = require("../models/user");

function renderSignupForm(req, res) {
  res.render("signup", { navbarLinks });
}

function renderLoginForm(req, res) {
  res.render("login", { navbarLinks });
}


async function handleSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    // Initialize session
    req.session.userId = newUser._id;

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid email or password");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send("Invalid email or password");

    // Store user ID in session
    req.session.userId = user._id;

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

function handleLogout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Could not log out.");
    }
    res.redirect("/login");
  });
}

module.exports = {
  renderSignupForm,
  renderLoginForm,
  handleSignup,
  handleLogin,
  handleLogout
};
