const express = require('express');
const router = express.Router();
const rfidController = require('../controllers/rfid_controllers.js');

// Route untuk membuat rfid_in
router.post('/rfid_in/:userId', rfidController.createRfidIn);

// Route untuk membuat rfid_out
router.post('/rfid_out/:userId', rfidController.createRfidOut);

module.exports = router;
