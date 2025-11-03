const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const { validateRegister, validateLogin, checkValidationResult } = require('../../middleware/validation');

// تولید توکن JWT
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId }, 
    process.env.JWT_SECRET, 
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

// ثبت‌نام
router.post('/register', validateRegister, checkValidationResult, async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // بررسی وجود کاربر
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'کاربر با این ایمیل قبلاً ثبت‌نام کرده است'
      });
    }

    // ایجاد کاربر جدید
    const user = new User({
      email,
      password,
      name
    });

    await user.save();

    // تولید توکن
    const token = generateToken(user._id);

    // برای وب اپلیکیشن - HttpOnly cookie
    res.cookie('Authorization', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    
    // برای موبایل اپ - در body
    if (req.headers['client-type'] === 'mobile') {
      return res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    }

    res.status(201).json({
      success: true,
      message: 'ثبت‌نام با موفقیت انجام شد',
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name
        },
        // token
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'خطا در ثبت‌نام'
    });
  }
});

// ورود
router.post('/login', validateLogin, checkValidationResult, async (req, res) => {
  try {
    const { email, password } = req.body;

    // پیدا کردن کاربر و شامل کردن پسورد
    const user = await User.findOne({ email }).select('+password');
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'ایمیل یا رمز عبور نادرست است'
      });
    }

    // تولید توکن
    const token = generateToken(user._id);

    // برای وب اپلیکیشن - HttpOnly cookie
    res.cookie('Authorization', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    
    // برای موبایل اپ - در body
    if (req.headers['client-type'] === 'mobile') {
      return res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    }

    res.json({
      success: true,
      message: 'ورود موفقیت‌آمیز بود',
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name
        },
        // token
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'خطا در ورود'
    });
  }
});

// دریافت اطلاعات کاربر
router.get('/user', auth, async (req, res) => {
  res.json({
    success: true,
    data: {
      user: req.user
    }
  });
});

module.exports = router;