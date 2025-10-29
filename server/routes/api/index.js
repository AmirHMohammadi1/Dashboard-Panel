var express = require('express');
var router = express.Router();

// Routes
router.use('/auth',require('./auth')) 

module.exports = router;
