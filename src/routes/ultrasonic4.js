const express = require('express');
const ultrasonicController = require('../controllers/ultrasonic4.js');
const router = express.Router();
const authenticate = require('../middleware/authenticate.js');

router.get('/', authenticate, ultrasonicController.getAllUltrasonic); // Contoh: GET /ultrasonics?page=1&limit=10


router.post('/', ultrasonicController.createUltrasonic);

module.exports = router;
