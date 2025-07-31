const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Home page - show all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate('author', 'username')
      .sort({ createdAt: -1 });
    res.render('blogs/index', { blogs, title: 'Latest Blogs' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;