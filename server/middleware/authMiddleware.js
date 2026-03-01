const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  // Check if the request has an authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (Format: "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      jwt.verify(token, process.env.JWT_SECRET);

      next(); // VIP Pass is valid, let them through!
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };