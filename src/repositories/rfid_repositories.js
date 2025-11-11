// repositories/rfidRepository.js
const { users, rfid_in, rfid_out } = require('../models');

// Fungsi untuk mencari user berdasarkan rfid_uid
const findUserByRfidUid = async (rfidUid) => {
  try {
    return await users.findOne({ where: { rfid_uid: rfidUid } });
  } catch (error) {
    console.error('Error finding user by rfid_uid:', error);
    throw new Error('Error finding user by rfid_uid');
  }
};

// Fungsi untuk membuat data rfid_in
const createRfidIn = async (userId) => {
  try {
    return await rfid_in.create({
      users_id: userId,
      created_at: new Date()
    });
  } catch (error) {
    console.error('Error creating rfid_in:', error);
    throw new Error('Error creating rfid_in');
  }
};

// Fungsi untuk membuat data rfid_out
const createRfidOut = async (userId) => {
  try {
    return await rfid_out.create({
      users_id: userId,
      created_at: new Date()
    });
  } catch (error) {
    console.error('Error creating rfid_out:', error);
    throw new Error('Error creating rfid_out');
  }
};

module.exports = {
  findUserByRfidUid,
  createRfidIn,
  createRfidOut
};
