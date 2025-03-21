const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for managing users
 */

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - password
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: StrongP@ss123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation failed
 */
router.post('/user/create', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Validate user input
        if (!fullName || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ fullName, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

/**
 * @swagger
 * /user/uploadImage:
 *   post:
 *     summary: Upload a user image
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - image
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Image uploaded successfully
 *       400:
 *         description: Invalid file format or image already exists
 *       404:
 *         description: User not found
 */
router.post('/user/uploadImage', upload.single('image'), async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (user.imagePath) {
            return res.status(400).json({ error: 'Image already exists for this user.' });
        }

        user.imagePath = `/uploads/${req.file.filename}`;
        await user.save();

        res.status(201).json({ message: 'Image uploaded successfully.', filePath: user.imagePath });
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
