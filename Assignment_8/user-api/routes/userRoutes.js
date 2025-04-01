const express = require('express');
const User = require('../models/user'); // Ensure this model is correctly defined
const bcrypt = require('bcryptjs');
const upload = require('../middlewares/uploadMiddleware'); // Ensure Multer is properly configured

const router = express.Router();

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with full name, email, and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "StrongPass123!"
 *             required:
 *               - fullName
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: "User created successfully."
 *       400:
 *         description: Validation failed or email already exists.
 *         content:
 *           application/json:
 *             example:
 *               error: "Validation failed."
 *       500:
 *         description: Internal server error.
 */
router.post('/user/create', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists.' });
        }

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
 *     description: Uploads an image file for a user identified by their email.
 *     consumes:
 *       multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Image uploaded successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: "Image uploaded successfully."
 *               filePath: "/images/filename.jpg"
 *       400:
 *         description: No image provided or invalid image format.
 *         content:
 *           application/json:
 *             examples:
 *               noImage:
 *                 value:
 *                   error: "No image provided."
 *               invalidFormat:
 *                 value:
 *                   error: "Invalid image format. Only JPEG, PNG, and GIF are allowed."
 *               imageAlreadyExists:
 *                 value:
 *                   error: "Image already exists for this user."
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found."
 *       500:
 *         description: Internal server error.
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

/**
 * @swagger
 * /user/delete:
 *   delete:
 *     summary: Delete a user
 *     description: Deletes a user by their email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: "User deleted successfully."
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found."
 *       500:
 *         description: Internal server error.
 */
router.delete('/user/delete/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

/**
 * @swagger
 * /user/edit:
 *   put:
 *     summary: Update user details
 *     description: Updates a user's full name and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *               fullName:
 *                 type: string
 *                 example: "Jane Doe"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "NewStrongPass123!"
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: User details updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: "User details updated successfully."
 *       400:
 *         description: Validation failed.
 *         content:
 *           application/json:
 *             example:
 *               error: "Validation failed."
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found."
 *       500:
 *         description: Internal server error.
 */
router.put('/user/edit', async (req, res) => {
    const { email, fullName, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (fullName) user.fullName = fullName;
        if (password) user.password = await bcrypt.hash(password, 10);

        await user.save();
        res.status(200).json({ message: 'User updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

/**
 * @swagger
 * /user/getAll:
 *   get:
 *     summary: Retrieve all users
 *     description: Retrieves a list of all users, excluding passwords.
 *     responses:
 *       200:
 *         description: Successfully retrieved all users.
 *         content:
 *           application/json:
 *             example:
 *               users:
 *                 - fullName: "John Doe"
 *                   email: "john.doe@example.com"
 *       500:
 *         description: Internal server error.
 */
router.get('/user/getAll', async (req, res) => {
    try {
        const users = await User.find().select('fullName email');
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
