const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {
    generateToken
} = require('../utils/helperFunctions');

// **Register a new user
router.post('/register', async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body;

        // Check if user already exists
        let user = await User.findOne({
            email
        });
        if (user) {
            return res.status(400).json({
            "msg": "User already exists"
        });
        }

        user = new User({
            username,
            email,
            password
        });

        await user.save();

        // Generate JWT token
        const token = generateToken(user._id);

        res.status(201).json({
            token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// **Login user
router.post('/login', async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        // Check user exists
        const user = await User.findOne({
            email
        });
        if (!user) {
            return res.status(400).json({
            "msg": "Invalid credentials"
        });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
            "msg": "Invalid credentials"
        });
        }

        // Generate JWT token
        const token = generateToken(user._id);

        res.json({
            token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// **Forgot Password (example implementation)
router.post('/forgot-password', async (req, res) => {
    // In a real implementation, you would:
    // 1. Find the user by email
    // 2. Generate a reset token
    // 3. Send an email with a link containing the reset token
    // 4. Store the reset token in the database (with an expiry)

    // This is a simplified example:
    const {
        email
    } = req.body;

    // Check if the user exists
    const user = await User.findOne({
        email
    });
    if (!user) {
        return res.status(404).json({
        "msg": "User not found"
    });
    }

    // In a real implementation, generate a reset token and send an email
    console.log(`Password reset requested for email: ${email}`);

    res.json({
        "msg": "Password reset link sent to your email address."
    });
});

router.post('/login', (req, res) => {
    // Implement login logic
    res.json({ success: true, message: 'Logged in successfully' });
});

router.post('/register', (req, res) => {
    // Implement registration logic
    res.json({ success: true, message: 'Registered successfully' });
});

module.exports = router;
