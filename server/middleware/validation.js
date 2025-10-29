const { body, validationResult } = require('express-validator');

// اعتبارسنجی ثبت‌نام
const validateRegister = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('لطفاً یک ایمیل معتبر وارد کنید'),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('رمز عبور باید شامل حروف بزرگ، کوچک و اعداد باشد'),
  
  body('name')
    .isLength({ min: 2, max: 50 })
    .trim()
    .escape()
    .withMessage('نام باید بین ۲ تا ۵۰ کاراکتر باشد')
];

// اعتبارسنجی ورود
const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('لطفاً یک ایمیل معتبر وارد کنید'),
  
  body('password')
    .notEmpty()
    .withMessage('رمز عبور الزامی است')
];

// بررسی نتایج اعتبارسنجی
const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'داده‌های ورودی نامعتبر',
      errors: errors.array()
    });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  checkValidationResult
};