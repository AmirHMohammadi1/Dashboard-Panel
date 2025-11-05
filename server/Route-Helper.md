/api/auth/register
post
input: email, password, name
output (if success): 
        success: true,
        message: ثبت‌نام با موفقیت انجام شد,
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
post
input: email, password
output (if success): 
        success: true,
        message: ورود موفقیت‌آمیز بود,
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
get
input: (jwttoken)
output (if success):
        success: true,
        data: {
        user
        }

================================

/api/users
get
input: (jwttoken)
output (if success):
        success: true,
        data: {
        users
        }

================================

/api/users/id
get
input: id (jwttoken in headers)
output (if success):
        success: true,
        data: {
        user
        }

================================

/api/users/edit-profile
put
input: id, name?, email?, gender?, birthday?, location?, phone?, skills? (jwttoken in headers)
output (if success):
        {
    success: true,
    message: پروفایل با موفقیت بروزرسانی شد,
    data: {
        user
    }
}

================================

/api/users/change-password
put
input: id, currentPassword, newPassword (jwttoken in headers)
output (if success):
        {
    success: true,
    message: رمز عبور با موفقیت تغییر کرد
}

