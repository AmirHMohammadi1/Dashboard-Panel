const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    // console.log(req.header('Authorization'))
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'دسترسی غیرمجاز. توکن ارائه نشده.' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded)
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'توکن نامعتبر' 
      });
    }

    req.user = user;
    next();
  } catch (error) {
    // console.log(error)
    res.status(402).json({ 
      success: false, 
      message: 'توکن نامعتبر' 
    });
  }
};

module.exports = auth;