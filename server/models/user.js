const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'ایمیل الزامی است'],
    unique: [true, 'ایمیل از قبل وجود دارد'],
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
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: 'جنسیت باید یکی از مقادیر male، female یا other باشد'
    },
    default: 'other'
  },
  birthday: {
    type: Date,
    validate: {
      validator: function (date) {
        return date < new Date();
      },
      message: 'تاریخ تولد نمی‌تواند در آینده باشد'
    }
  },
  location: {
    country: {
      type: String,
      trim: true,
      maxlength: [50, 'نام کشور نمی‌تواند بیشتر از ۵۰ کاراکتر باشد']
    },
    city: {
      type: String,
      trim: true,
      maxlength: [50, 'نام شهر نمی‌تواند بیشتر از ۵۰ کاراکتر باشد']
    },
    adress: {
      type: String,
      trim: true,
      maxlength: [80, 'آدرس نمی‌تواند بیشتر از 80 کاراکتر باشد']
    }
  },
  phone: {
    type: String,
    // validate: {
    //   validator: function(phone) {
    //     return !phone || /^[\d\s-()+]{10,}$/.test(phone);
    //   },
    //   message: 'شماره تلفن معتبر نیست'
    // }
  },
  skills: {
    type: String,
    trim: true,
    maxlength: [1000, 'مهارت نمی‌تواند بیشتر از 1000 کاراکتر باشد']
  },
  devices: [{
    deviceType: {
      type: String,
      enum: ['mobile', 'tablet', 'desktop', 'laptop'],
      required: true
    },
    os: {
      type: String,
      trim: true,
      maxlength: 50
    },
    browser: {
      type: String,
      trim: true,
      maxlength: 50
    },
    lastLogin: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  logedin: {
    type: Boolean,
  },

  twoFactorAuth: {
    enabled: {
      type: Boolean,
      default: false
    },
    method: {
      type: String,
      enum: {
        values: ['key', 'email', 'sms'],
        message: 'روش دو عاملی باید یکی از مقادیر key، email یا sms باشد'
      },
      // default: 'email'
    },
    secretKey: {
      type: String,
      select: false
    },
    backupCodes: [{
      type: String,
      select: false
    }],
    lastUsed: Date
  },


  notificationSettings: {
    // تنظیمات برای انواع اعلان‌ها
    mentions: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      sms: { type: Boolean, default: false }
    },
    comments: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      sms: { type: Boolean, default: false }
    },
    follows: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      sms: { type: Boolean, default: false }
    },
    logins: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: false },
      sms: { type: Boolean, default: true } 
    },
    // تنظیمات کلی
    global: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      muteAll: { type: Boolean, default: false }
    }
  },

  // فیلدهای اضافی برای مدیریت اعلان‌ها
  notificationPreferences: {
    quietHours: {
      enabled: { type: Boolean, default: false },
      start: { type: String, default: '22:00' }, // format: HH:mm
      end: { type: String, default: '08:00' }
    },
    language: {
      type: String,
      default: 'fa',
      enum: ['fa', 'en']
    }
  }

});

// هش کردن رمز عبور قبل از ذخیره‌سازی
userSchema.pre('save', async function (next) {
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
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);