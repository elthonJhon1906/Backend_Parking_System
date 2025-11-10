const express = require('express');
const usersController = require('../controllers/users.js');
const router = express.Router();
const authenticate = require('../middleware/authenticate.js');
const authorizeRole = require('../middleware/authorizeRole.js');

router.get('/users', authenticate, authorizeRole, usersController.getAllUsers);

module.exports = router;
