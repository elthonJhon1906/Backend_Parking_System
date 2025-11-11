// services/rfidService.js
const { rfid_in, rfid_out, users } = require('../models');
const rfidRepository = require('../repositories/rfidRepository');

// Fungsi untuk membuat data rfid_in berdasarkan rfid_uid
const createRfidIn = async (rfidUid) => {
  try {
    // Cari user berdasarkan rfid_uid
    const user = await rfidRepository.findUserByRfidUid(rfidUid);

    if (!user) {
      throw new Error('User not found for the given RFID UID');
    }

    // Buat data rfid_in dengan user yang ditemukan
    return await rfidRepository.createRfidIn(user.id);
  } catch (error) {
    console.error('Error creating rfid_in:', error);
    throw new Error('Error creating rfid_in');
  }
};

// Fungsi untuk membuat data rfid_out berdasarkan rfid_uid
const createRfidOut = async (rfidUid) => {
  try {
    // Cari user berdasarkan rfid_uid
    const user = await rfidRepository.findUserByRfidUid(rfidUid);

    if (!user) {
      throw new Error('User not found for the given RFID UID');
    }

    // Buat data rfid_out dengan user yang ditemukan
    return await rfidRepository.createRfidOut(user.id);
  } catch (error) {
    console.error('Error creating rfid_out:', error);
    throw new Error('Error creating rfid_out');
  }
};

module.exports = { createRfidIn, createRfidOut };
