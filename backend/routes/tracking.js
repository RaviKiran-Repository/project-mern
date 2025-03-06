const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// **GET /api/tracking/steps
router.get('/steps', authMiddleware, async (req, res) => {
    try {
        // **Fetch the user's steps data from the database
        // **This is a placeholder - replace with your database query
        const stepsData = {
            date: '2024-02-24',
            steps: 5230
        };
        res.json(stepsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

// **POST /api/tracking/steps
router.post('/steps', authMiddleware, async (req, res) => {
    try {
        const {
            date,
            steps
        } = req.body;

        // **Save the user's steps data to the database
        // **This is a placeholder - replace with your database saving logic

        res.status(201).json({
            message: 'Steps data saved successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;
