const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const imageController = require("../controllers/imageController");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Multer file filter for allowed formats
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG, and GIF formats are allowed"));
  }
};

// Multer instance with storage and file filter configuration
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Upload image endpoint
router.post(
  "/uploadImage",
  upload.single("image"),
  imageController.uploadImage
);
//Fetch Image endpoint
router.get("/images", imageController.fetchImage);

module.exports = router;
