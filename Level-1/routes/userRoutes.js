const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/users', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json(user);
});

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// Update a user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  const user = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
  res.status(200).json(user);
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
