// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const adminAuthorize = require('../middleware/authorizeRole.js');
const authenticate = require('../middleware/authenticate.js');

router.post('/register', authenticate, adminAuthorize, authController.register);

router.post('/login', authController.login);

router.get('/rfid-data/:userId', authController.getRfidData);

module.exports = router;
