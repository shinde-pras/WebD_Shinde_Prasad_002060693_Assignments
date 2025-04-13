const express = require('express');
const multer = require('multer');
const { getCompanies, createCompany } = require('../controllers/companyController');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Rename file with timestamp
    },
});

const upload = multer({ storage });

// GET /api/companies - Fetch all companies
router.get('/companies', getCompanies);

// POST /api/companies - Add a new company with an image
router.post('/companies', upload.single('image'), createCompany);

module.exports = router;
