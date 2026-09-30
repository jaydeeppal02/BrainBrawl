const User = require("../models/userModels");
const bcrypt = require("bcryptjs");

// Register
async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    // Check all inputs
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        msg: "All inputs are required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        msg: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      msg: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Register Error:", err);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
}

// Login
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        msg: "All inputs are required",
      });
    }

    // Check email
    const existingLoginUser = await User.findOne({ email });

    if (!existingLoginUser) {
      return res.status(401).json({
        success: false,
        msg: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingLoginUser.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        msg: "Invalid email or password",
      });
    }

    // Login successful
    return res.status(200).json({
      success: true,
      msg: "Login successfully",
      user: {
        id: existingLoginUser._id,
        name: existingLoginUser.name,
        email: existingLoginUser.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
}

module.exports = { register, login };