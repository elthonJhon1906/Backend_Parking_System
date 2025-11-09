const express = require('express');
const flameController = require('../controllers/flame_sensor.js');
const flame_sensorController = require('../controllers/flame_sensor.js');
const router = express.Router();

router.get('/', flame_sensorController.getAllFlame_sensor); // Contoh: GET /ultrasonics?page=1&limit=10


router.post('/', flame_sensorController.createFlame_sensor);

module.exports = router;
