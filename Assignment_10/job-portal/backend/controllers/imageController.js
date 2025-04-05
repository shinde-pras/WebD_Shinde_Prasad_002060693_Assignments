const User = require("../models/userSchema");
const fs = require("fs");
const path = require("path");

// Upload image
exports.uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imagePath = req.file.path;

    // Assuming the user's email is provided in the request body
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user document with the image path
    user.imagePath = imagePath;
    await user.save();

    res.status(200).json({ message: "Image uploaded successfully", imagePath });
    console.log("Image uploaded successfully.");
  } catch (error) {
    next(error);
  }
};

exports.fetchImage = async (req, res) => {
  try {
    const uploadsDirectory = path.join(__dirname, "../uploads");
    const imageFiles = fs.readdirSync(uploadsDirectory);
    const images = imageFiles.map((file) => {
      return {
        filename: file,
        path: path.join(uploadsDirectory, file),
      };
    });
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
