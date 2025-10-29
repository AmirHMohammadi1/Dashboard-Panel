/api/auth/register
input: email, password, name
output (if success): 
        success: true,
        message: 'ثبت‌نام با موفقیت انجام شد',
        data: {
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        },
        token
        }

===============================

/api/auth/login
input: email, password
output (if success): 
        success: true,
        message: 'ورود موفقیت‌آمیز بود',
        data: {
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        },
        token
        }

================================

/api/auth/user
input: (jwttoken)
output (if success):
        success: true,
        data: {
        user: req.user
        }