const transactionService = require('../services/transactions.js');

const transactionController = {
  // Fungsi untuk membuat transaksi
  createTransaction: async (req, res) => {
    const { userId } = req.params;  // Dapatkan userId dari parameter

    try {
      // Panggil service untuk membuat transaksi
      const transaction = await transactionService.createTransaction(userId);

      // Mengembalikan response dengan transaksi yang baru dibuat
      return res.status(201).json({
        message: 'Transaction created successfully',
        transaction: transaction
      });
    } catch (error) {
      console.error('Error in createTransaction controller:', error);
      return res.status(500).json({ message: 'Failed to create transaction', error: error.message });
    }
  }
};

module.exports = transactionController;
