const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Create User
exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created successfully." });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const { email, fullName, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: "User not found" });

    if (fullName) user.fullName = fullName;
    if (password) user.password = await bcrypt.hash(password, 10);

    await user.save();
    res.status(200).json({ message: "User updated successfully." });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOneAndDelete({ email });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ message: "User deleted successfully." });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("fullName email");
    res.status(200).json({ users });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Upload Image
exports.uploadImage = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.image) return res.status(400).json({ error: "Image already exists for this user." });

    user.image = req.file.path;
    await user.save();

    res.status(201).json({ message: "Image uploaded successfully.", filePath: req.file.path });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
