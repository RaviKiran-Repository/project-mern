const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// **GET /api/health-reminders
router.get('/', authMiddleware, async (req, res) => {
    try {
        // **Fetch the user's health reminders from the database
        // **This is a placeholder - replace with your database query
        const reminders = [{
            medication: 'Aspirin',
            time: '8:00 AM'
        }, {
            appointment: 'Doctor Visit',
            time: '2:00 PM'
        }];
        res.json(reminders);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

// **POST /api/health-reminders
router.post('/', authMiddleware, async (req, res) => {
    try {
        const {
            medication,
            time
        } = req.body;

        // **Save the new health reminder to the database
        // **This is a placeholder - replace with your database saving logic

        res.status(201).json({
            message: 'Health reminder saved successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;
