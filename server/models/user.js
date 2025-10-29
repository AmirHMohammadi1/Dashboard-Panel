const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'ایمیل الزامی است'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'رمز عبور الزامی است'],
    minlength: [8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'],
    select: false
  },
  name: {
    type: String,
    // required: [true, 'نام الزامی است'],
    trim: true,
    maxlength: [50, 'نام نمی‌تواند بیش از ۵۰ کاراکتر باشد']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// هش کردن رمز عبور قبل از ذخیره‌سازی
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// مقایسه رمز عبور
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);