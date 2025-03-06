const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// **POST /api/voice-interaction
router.post('/', authMiddleware, async (req, res) => {
    try {
        const {
            voiceCommand
        } = req.body;

        // **Integrate with a voice recognition API
        // **This is a placeholder - replace with your voice recognition logic

        const response = `You said: ${voiceCommand}`;
        res.json({
            response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;
