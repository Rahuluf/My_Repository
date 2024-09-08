const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            email,
            password
        });

        await user.save();

        const payload = {
            id: user._id
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            id: user._id
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });

        res.status(200).json({ token, refreshToken });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Logout a user by blacklisting the token
const blacklist = []; // In a real application, use a database to store blacklisted tokens

router.post('/logout', auth, (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    blacklist.push(token);
    res.status(200).json({ msg: 'Logged out' });
});

// Refresh token
router.post('/refresh-token', (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ msg: 'No refresh token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const payload = { id: decoded.id };
        const newToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

        res.status(200).json({ token: newToken });
    } catch (err) {
        res.status(401).json({ msg: 'Invalid refresh token' });
    }
});

module.exports = router;
