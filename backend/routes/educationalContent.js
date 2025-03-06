const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// **GET /api/educational-content
router.get('/', authMiddleware, async (req, res) => {
    try {
        // **Fetch educational content from a database or CMS
        // **This is a placeholder - replace with your actual data source
        const content = [{
            title: 'Understanding Diabetes',
            link: 'https://www.example.com/diabetes'
        }, {
            title: 'Heart Health Tips',
            link: 'https://www.example.com/heart-health'
        }];
        res.json(content);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;
