const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON data in request body
app.use(express.urlencoded({
    extended: true
})); // To parse URL-encoded data

// Define a root route for testing
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/symptom-checker', require('./routes/symptomChecker'));
app.use('/api/mental-health', require('./routes/mentalHealth'));
app.use('/api/family-health', require('./routes/familyHealth'));
app.use('/api/doctor-communication', require('./routes/doctorCommunication'));
app.use('/api/health-statistics', require('./routes/healthStatistics'));
app.use('/api/emergency-assistance', require('./routes/emergencyAssistance'));
app.use('/api/tracking', require('./routes/tracking'));
app.use('/api/educational-content', require('./routes/educationalContent'));
app.use('/api/ai-health-advice', require('./routes/aiHealthAdvice'));
app.use('/api/voice-interaction', require('./routes/voiceInteraction'));
app.use('/api/nearby-hospitals', require('./routes/nearbyHospitals'));
app.use('/api/health-reminders', require('./routes/healthReminders'));

// Example route for testing with Postman
app.post('/api/test', (req, res) => {
    try {
        const { name, message } = req.body;
        if (!name || !message) {
            return res.status(400).json({
                error: 'Name and message are required'
            });
        }
        res.status(200).json({
            success: true,
            name,
            message
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Server Error'
        });
    }
});

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found'
    });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(error.status || 500).json({
        error: error.message
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
