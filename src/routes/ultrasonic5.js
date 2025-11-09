const express = require('express');
const ultrasonicController = require('../controllers/ultrasonic5.js');
const router = express.Router();

router.get('/', ultrasonicController.getAllUltrasonic); // Contoh: GET /ultrasonics?page=1&limit=10


router.post('/', ultrasonicController.createUltrasonic);

module.exports = router;
