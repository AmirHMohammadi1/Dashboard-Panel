const rateLimit = require('express-rate-limit');

// محدودیت نرخ برای احراز هویت
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 دقیقه
  max: 30, // حداکثر ۵ درخواست در هر بازه
  message: {
    success: false,
    message: 'تعداد درخواست‌ها بیش از حد مجاز است. لطفاً ۱۵ دقیقه دیگر تلاش کنید.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = authLimiter;