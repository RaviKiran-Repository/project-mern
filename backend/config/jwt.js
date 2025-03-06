//Configuration for JWT can be put here
//For example, secret key, expiration time, etc.
module.exports = {
    secret: process.env.JWT_SECRET || 'ravikiran', // Use environment variable for security
    expiresIn: '1h' // Token expiration time
};
