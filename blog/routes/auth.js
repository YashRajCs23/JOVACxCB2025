const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { requireGuest } = require('../middleware/auth');

// Register page
router.get('/register', requireGuest, (req, res) => {
  res.render('auth/register', { title: 'Register', error: null });
});

// Register user
router.post('/register', requireGuest, async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    
    if (password !== confirmPassword) {
      return res.render('auth/register', { 
        title: 'Register', 
        error: 'Passwords do not match' 
      });
    }

    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      return res.render('auth/register', { 
        title: 'Register', 
        error: 'User with this email or username already exists' 
      });
    }

    const user = new User({ username, email, password });
    await user.save();

    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email
    };

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render('auth/register', { 
      title: 'Register', 
      error: 'Something went wrong' 
    });
  }
});

// Login page
router.get('/login', requireGuest, (req, res) => {
  res.render('auth/login', { title: 'Login', error: null });
});

// Login user
router.post('/login', requireGuest, async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.render('auth/login', { 
        title: 'Login', 
        error: 'Invalid email or password' 
      });
    }

    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email
    };

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render('auth/login', { 
      title: 'Login', 
      error: 'Something went wrong' 
    });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

module.exports = router;