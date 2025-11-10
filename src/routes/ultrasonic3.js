const express = require('express');
const ultrasonicController = require('../controllers/ultrasonic3.js');
const router = express.Router();
const authenticate = require('../middleware/authenticate.js');
const authenticateApiKey = require('../middleware/api_key.js');

router.get('/', authenticate, ultrasonicController.getAllUltrasonic); // Contoh: GET /ultrasonics?page=1&limit=10


router.post('/', authenticateApiKey, ultrasonicController.createUltrasonic);

module.exports = router;
