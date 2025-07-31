const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { requireAuth } = require('../middleware/auth');
const multer = require('multer');
const imagekit = require('../utils/imagekit');
const upload = multer({ storage: multer.memoryStorage() });

// New blog form
router.get('/new', requireAuth, (req, res) => {
  res.render('blogs/new', { title: 'Create New Blog', error: null });
});

// Create blog with image upload
router.post('/', requireAuth, upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    
    if (!title || !content) {
      return res.render('blogs/new', { 
        title: 'Create New Blog', 
        error: 'Title and content are required' 
      });
    }

    // Upload image to ImageKit if present
    let imageUrl = null;
    if (req.file) {
      const result = await imagekit.upload({
        file: req.file.buffer.toString('base64'),
        fileName: `${Date.now()}_${req.file.originalname}`,
        folder: '/blog-images'
      });
      imageUrl = result.url;
    }

    const blog = new Blog({
      title: title.trim(),
      content: content.trim(),
      imageUrl,
      author: req.session.user.id
    });

    await blog.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render('blogs/new', { 
      title: 'Create New Blog', 
      error: 'Error creating blog' 
    });
  }
});

// Edit blog form
router.get('/:id/edit', requireAuth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).render('404', { title: 'Blog Not Found' });
    }
    if (blog.author.toString() !== req.session.user.id) {
      return res.status(403).render('403', { title: 'Unauthorized' });
    }
    res.render('blogs/edit', { blog, title: 'Edit Blog', error: null });
  } catch (error) {
    console.error(error);
    res.status(500).render('500', { title: 'Server Error' });
  }
});

// Update blog with optional image update
router.put('/:id', requireAuth, upload.single('image'), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).render('404', { title: 'Blog Not Found' });
    }
    if (blog.author.toString() !== req.session.user.id) {
      return res.status(403).render('403', { title: 'Unauthorized' });
    }
    
    const { title, content } = req.body;
    if (!title || !content) {
      return res.render('blogs/edit', { 
        blog, 
        title: 'Edit Blog', 
        error: 'Title and content are required' 
      });
    }

    // Handle image update if new image is uploaded
    const updateData = {
      title: title.trim(),
      content: content.trim()
    };

    if (req.file) {
      const result = await imagekit.upload({
        file: req.file.buffer.toString('base64'),
        fileName: `${Date.now()}_${req.file.originalname}`,
        folder: '/blog-images'
      });
      updateData.imageUrl = result.url;
    }

    await Blog.findByIdAndUpdate(req.params.id, updateData);
    res.redirect(`/blogs/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).render('500', { title: 'Server Error' });
  }
});

// Delete blog
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    if (blog.author.toString() !== req.session.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Show single blog
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'username');
    if (!blog) {
      return res.status(404).render('404', { title: 'Blog Not Found' });
    }
    res.render('blogs/show', { blog, title: blog.title });
  } catch (error) {
    console.error(error);
    res.status(500).render('500', { title: 'Server Error' });
  }
});

module.exports = router;