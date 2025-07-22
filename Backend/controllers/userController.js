const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
exports.signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ error: 'Email already in use' });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hash });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

        // create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
