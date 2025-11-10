const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ====================== EMAIL/PASSWORD SIGNUP ======================
exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already in use' });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hash });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({ message: 'Signup successful', user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ====================== EMAIL/PASSWORD LOGIN ======================
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7h' });

    res.json({ message: 'Login successful', user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ====================== GOOGLE OAUTH LOGIN ======================
exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, googleId });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: `Welcome ${user.name}!`, user, token });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Google login failed' });
  }
};
