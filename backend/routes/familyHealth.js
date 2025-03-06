const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// **GET /api/family-health
router.get('/', authMiddleware, async (req, res) => {
    try {
        // **Fetch family health data for the user from the database
        // **This is a placeholder - replace with your database query
        const familyHealthData = [{
            member: 'John Doe',
            age: 40,
            condition: 'Healthy'
        }];
        res.json(familyHealthData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

// **POST /api/family-health/add
router.post('/add', authMiddleware, async (req, res) => {
    try {
        const {
            member,
            age,
            condition
        } = req.body;

        // **Save the new family member's health data to the database
        // **This is a placeholder - replace with your database saving logic

        res.status(201).json({
            message: 'Family member added successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;
