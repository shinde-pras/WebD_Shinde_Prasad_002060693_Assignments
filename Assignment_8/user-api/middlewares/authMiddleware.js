const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

// Middleware to verify JWT Token
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization"); // Get token from header
    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user data to request object
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid token." });
    }
};

module.exports = { authenticateUser };
