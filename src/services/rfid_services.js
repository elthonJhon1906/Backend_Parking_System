const rfidRepository = require('../repositories/rfid_repositories.js');

const rfidService = {
  // Fungsi untuk membuat rfid_in
  createRfidIn: async (userId) => {
    try {
      return await rfidRepository.createRfidIn(userId);
    } catch (error) {
      console.error('Error in createRfidIn service:', error);
      throw new Error('Error in createRfidIn service');
    }
  },

  // Fungsi untuk membuat rfid_out
  createRfidOut: async (userId) => {
    try {
      return await rfidRepository.createRfidOut(userId);
    } catch (error) {
      console.error('Error in createRfidOut service:', error);
      throw new Error('Error in createRfidOut service');
    }
  }
};

module.exports = rfidService;
