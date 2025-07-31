const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // Add to User schema
username: {
  type: String,
  required: [true, 'Username is required'],
  unique: true,
  trim: true,
  minlength: [3, 'Username must be at least 3 characters'],
  maxlength: [20, 'Username cannot exceed 20 characters'],
  match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
},
email: {
  type: String,
  required: [true, 'Email is required'],
  unique: true,
  trim: true,
  lowercase: true,
  match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
},
password: {
  type: String,
  required: [true, 'Password is required'],
  minlength: [6, 'Password must be at least 6 characters']
}
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);