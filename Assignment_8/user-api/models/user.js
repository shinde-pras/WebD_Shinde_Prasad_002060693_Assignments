const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imagePath: { type: String } // Store image file path
});

module.exports = mongoose.model('User', UserSchema);
