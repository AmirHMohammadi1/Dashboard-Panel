const router = require('express').Router();
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const { checkValidationResult } = require('../../middleware/validation')
const { body } = require('express-validator');

// 1. GET /user/ - دریافت همه کاربران (فقط ادمین)
router.get('/', auth, async (req, res) => {
    try {
        // const page = parseInt(req.query.page) || 1;
        // const limit = parseInt(req.query.limit) || 10;
        // const skip = (page - 1) * limit;

        const users = await User.find({})
        //   .select('-password -twoFactorAuth.secretKey -twoFactorAuth.backupCodes')
        //   .skip(skip)
        //   .limit(limit)
        //   .sort({ createdAt: -1 });

        // const total = await User.countDocuments();


        res.json({
            success: true,
            data: {
                users,
                // pagination: {
                //   page,
                //   limit,
                //   total,
                //   pages: Math.ceil(total / limit)
                // }
            }
        });
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت کاربران'
        });
    }
});

// 2. GET /user/id - دریافت یک کاربر
router.get('/id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.body.id)
            .select('-password -twoFactorAuth.secretKey -twoFactorAuth.backupCodes');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        // بررسی دسترسی: کاربر فقط می‌تواند اطلاعات خودش را ببیند یا ادمین
        if (req.user.id !== req.body.id && !req.user.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'دسترسی غیر مجاز'
            });
        }

        res.json({
            success: true,
            data: { user }
        });
    } catch (error) {
        console.error('Get user error:', error);
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                message: 'شناسه کاربر معتبر نیست'
            });
        }
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت کاربر'
        });
    }
});

// 3. PUT /user/edit-profile - تغییر پروفایل
router.put('/edit-profile',
    auth,
    [
        body('name')
            .optional()
            .trim()
            .isLength({ min: 2, max: 50 })
            .withMessage('نام باید بین ۲ تا ۵۰ کاراکتر باشد'),
        body('email')
            .optional()
            .isEmail()
            .withMessage('ایمیل معتبر نیست')
            .normalizeEmail(),
        body('gender')
            .optional()
            .isIn(['male', 'female', 'other'])
            .withMessage('جنسیت معتبر نیست'),
        body('phone')
            .optional()
            .matches(/^[\d\s-()+]{10,}$/)
            .withMessage('شماره تلفن معتبر نیست'),
        body('skills')
            .optional()
            .isArray()
            .withMessage('مهارت‌ها باید به صورت آرایه باشند')
    ],
    checkValidationResult,
    async (req, res) => {
        try {
            // بررسی دسترسی
            if (req.user.id !== req.body.id && !req.user.isAdmin) {
                return res.status(403).json({
                    success: false,
                    message: 'شما فقط می‌توانید پروفایل خود را ویرایش کنید'
                });
            }

            const user = await User.findById(req.body.id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'کاربر یافت نشد'
                });
            }

            // بررسی یکتایی ایمیل اگر تغییر کرده
            if (req.body.email && req.body.email !== user.email) {
                const existingUser = await User.findOne({ email: req.body.email });
                if (existingUser) {
                    return res.status(409).json({
                        success: false,
                        message: 'این ایمیل قبلاً ثبت شده است'
                    });
                }
            }

            // فیلدهای قابل بروزرسانی
            const allowedUpdates = ['name', 'email', 'gender', 'birthday', 'location', 'phone', 'skills'];
            const updates = {};

            allowedUpdates.forEach(field => {
                if (req.body[field] !== undefined) {
                    updates[field] = req.body[field];
                }
            });

            const updatedUser = await User.findByIdAndUpdate(
                req.body.id,
                updates,
                { new: true, runValidators: true }
            ).select('-password -twoFactorAuth.secretKey -twoFactorAuth.backupCodes');

            res.json({
                success: true,
                message: 'پروفایل با موفقیت بروزرسانی شد',
                data: { user: updatedUser }
            });
        } catch (error) {
            console.error('Edit profile error:', error);
            res.status(500).json({
                success: false,
                message: 'خطا در بروزرسانی پروفایل'
            });
        }
    }
);


module.exports = router;