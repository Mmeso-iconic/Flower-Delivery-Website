const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  // Check for Bearer token in header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using your secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user that matches the token, exclude password
      req.user = await User.findById(decoded.id).select('-password');

      // Continue to next middleware or controller
      return next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: 'Not authorized, token failed' });
    }
  }

  // If no token found
  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token' });
  }
};

module.exports = { protect };
