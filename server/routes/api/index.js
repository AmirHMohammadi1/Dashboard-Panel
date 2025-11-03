var express = require('express');
var router = express.Router();

// Routes
router.use('/auth',require('./auth'))
router.use('/users',require('./users'))

module.exports = router;
