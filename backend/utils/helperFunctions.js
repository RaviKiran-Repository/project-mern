const jwt = require('jsonwebtoken');
const config = require('../config/jwt'); // Import JWT configuration

// **Function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({
        userId
    }, config.secret, {
        expiresIn: config.expiresIn
    });
};

module.exports = {
    generateToken
};
