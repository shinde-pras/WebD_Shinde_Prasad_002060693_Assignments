const Company = require('../models/companyModel');

// Fetch all companies
exports.getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching companies', error });
    }
};

// Add a new company with an image
exports.createCompany = async (req, res) => {
    try {
        const { name } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : ''; // Save image path

        const company = new Company({ name, image });
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error creating company', error });
    }
};
