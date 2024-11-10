const express = require('express');
const router = express.Router();
const Users = require('../models/user');
const bcrypt = require('bcrypt');
const validatePassword = require('../utils/validatePassword');

router.post('/login',  async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).send('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Incorrect password');
    }
    return res.status(200).send('Login successful');
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send('Login failed. Please try again.');
  }
});

router.post('/registration', async (req, res) => {
  const { 
    photo,
    name, 
    surname,
    email, 
    birthday,
    password,
    confirmPassword} = req.body;

  //validate password
  const passwordError = validatePassword(password);
  if (passwordError) {
    return res.status(400).send(passwordError);
  } 

  // Validate that password and confirmPassword match 
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    return res.status(400).send('Passwords do not match.'); 
  }

  try {
    await Users.create({
        photo,
        name, 
        surname,
        email, 
        birthday,
        password: await bcrypt.hash(password, 15),
  });
    return res.status(200).send('Registration successful');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Registration failed. Please try again.');
  }
});

module.exports = router;