const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  excerpt: {
    type: String,
    maxlength: 200
  },
  imageUrl: {
  type: String,
  default: null
}
}, { timestamps: true });

// Create excerpt before saving
blogSchema.pre('save', function(next) {
  if (this.content && !this.excerpt) {
    this.excerpt = this.content.substring(0, 150) + '...';
  }
  next();
});

module.exports = mongoose.model('Blog', blogSchema);