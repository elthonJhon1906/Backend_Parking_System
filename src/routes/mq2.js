const express = require('express');
const mq2Controller = require('../controllers/mq2.js');
const router = express.Router();
const authenticateApiKey = require('../middleware/api_key.js');
router.get('/', mq2Controller.getAllMq2); // Contoh: GET /ultrasonics?page=1&limit=10


router.post('/', authenticateApiKey, mq2Controller.createMq2);

module.exports = router;
