const transactionRepository = require('../repositories/transactions.js');

const transactionService = {
  // Service untuk menangani pembuatan transaksi
  createTransaction: async (userId) => {
    try {
      const transaction = await transactionRepository.createTransactionForUser(userId);
      return transaction;
    } catch (error) {
      console.error('Error in createTransaction service:', error);
      throw new Error('Error while creating transaction');
    }
  }
};

module.exports = transactionService;
