// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Endpoint untuk registrasi user
router.post('/register', authController.register);

// Endpoint untuk login dan mendapatkan JWT
router.post('/login', authController.login);

// Endpoint untuk mendapatkan data rfid_in dan rfid_out berdasarkan userId
router.get('/rfid-data/:userId', authController.getRfidData);

module.exports = router;
