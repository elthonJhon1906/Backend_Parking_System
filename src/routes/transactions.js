const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions.js');

// Route untuk membuat transaksi berdasarkan userId
router.post('/create/:userId', transactionController.createTransaction);

module.exports = router;
