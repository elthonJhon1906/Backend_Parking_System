const { rfid_in, rfid_out } = require('../models');

const rfidRepository = {
  // Fungsi untuk membuat data rfid_in
  createRfidIn: async (userId) => {
    try {
      return await rfid_in.create({
        users_id: userId,
        created_at: new Date()  // Atur waktu sekarang sebagai created_at
      });
    } catch (error) {
      console.error('Error creating rfid_in:', error);
      throw new Error('Error creating rfid_in');
    }
  },

  // Fungsi untuk membuat data rfid_out
  createRfidOut: async (userId) => {
    try {
      return await rfid_out.create({
        users_id: userId,
        created_at: new Date()  // Atur waktu sekarang sebagai created_at
      });
    } catch (error) {
      console.error('Error creating rfid_out:', error);
      throw new Error('Error creating rfid_out');
    }
  }
};

module.exports = rfidRepository;
