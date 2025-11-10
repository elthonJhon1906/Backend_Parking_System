const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions.js');
const authenticate = require('../middleware/authenticate.js');
const authorizeAdmin = require('../middleware/authorizeRole.js');
// Route untuk membuat transaksi berdasarkan userId

router.post('/:userId', authenticate, authorizeAdmin, transactionController.createTransaction);

module.exports = router;
