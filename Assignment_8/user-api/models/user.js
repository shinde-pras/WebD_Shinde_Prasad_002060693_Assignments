const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z\s]+$/.test(value); // Allow only alphabetic characters and spaces
            },
            message: 'Full name must contain only letters and spaces'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Validate email format with domain
            },
            message: 'Invalid email format. Email must include a valid domain, e.g., @domain.com'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: function (value) {
                return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value); // Strong password rules
            },
            message:
                'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character'
        }
    },
    imagePath: {
        type: String,
        default: null // Default value for imagePath
    }
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
