const { body } = require('express-validator');

const userValidationRules = [
    body('fullName')
        .trim()
        .notEmpty().withMessage('Full name is required')
        .matches(/^[a-zA-Z\s]+$/).withMessage('Full name must contain only letters and spaces'),

    body('email')
        .trim()
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),

    body('password')
        .trim()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/\d/).withMessage('Password must contain at least one digit')
        .matches(/[\W_]/).withMessage('Password must contain at least one special character'),
];

module.exports = userValidationRules;
