const express = require('express');
const ultrasonicController = require('../controllers/ultrasonic1.js');
const router = express.Router();
const authorizeAdmin = require('../middleware/authorizeRole.js');
const authenticate = require('../middleware/authenticate.js');
router.get('/',authenticate, authorizeAdmin, ultrasonicController.getAllUltrasonic); // Contoh: GET /ultrasonics?page=1&limit=10


router.post('/', ultrasonicController.createUltrasonic);

module.exports = router;
