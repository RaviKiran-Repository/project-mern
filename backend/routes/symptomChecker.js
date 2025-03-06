const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/symptom-checker
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { symptoms } = req.body;

        if (!symptoms) {
            return res.status(400).json({
                message: 'Symptoms are required'
            });
        }

        // Replace with actual AI/ML integration or rule-based logic
        let advice = "Based on your symptoms, it's recommended to consult with a healthcare professional.";

        if (symptoms.toLowerCase().includes("headache") && symptoms.toLowerCase().includes("fever")) {
            advice = "You might have a cold or flu. Rest and stay hydrated. If symptoms worsen, see a doctor.";
        }

        res.status(200).json({
            advice
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;
