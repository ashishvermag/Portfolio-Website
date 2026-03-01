const jwt = require('jsonwebtoken');

// @route   POST /api/auth/login
const login = (req, res) => {
  const { username, password } = req.body;

  // Check if credentials match our .env file
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    
    // Create the VIP Pass (Token) valid for 1 day
    const token = jwt.sign({ id: 'admin' }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { login };