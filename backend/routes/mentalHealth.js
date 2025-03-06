const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// **GET /api/mental-health/resources
router.get('/resources', authMiddleware, (req, res) => {
    // **In a real application, fetch these from a database or configuration
    const resources = [{
        name: 'Mental Health America',
        url: 'https://www.mhanational.org/'
    }, {
        name: 'SAMHSA',
        url: 'https://www.samhsa.gov/'
    }];
    res.json(resources);
});

module.exports = router;
