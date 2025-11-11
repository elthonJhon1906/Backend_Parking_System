// repositories/authRepository.js
const { users } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Fungsi untuk mencari user berdasarkan username
const findUserByUsername = async (username) => {
  try {
    return await users.findOne({ where: { username } });
  } catch (error) {
    console.error('Error in findUserByUsername:', error);
    throw new Error('Error finding user');
  }
};

// Fungsi untuk membuat user baru
const createUser = async (userData) => {
  try {
    // Validasi inputan
    if (!userData.username || !userData.password) {
      throw new Error('Username and password are required');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Membuat user baru dengan hashed password
    return await users.create({
      name: userData.name,
      username: userData.username,
      password: hashedPassword,
      credit: userData.credit,
      citizen_id: userData.citizen_id,
      role:  userData.role
    });
  } catch (error) {
    console.error('Error in createUser:', error);
    throw new Error('Error creating user');
  }
};

// Fungsi untuk memperbarui rfid_uid
const updateRfidUid = async (userId, rfidUid) => {
  try {
    return await users.update(
      { rfid_uid: rfidUid },
      { where: { id: userId } }
    );
  } catch (error) {
    console.error('Error in updateRfidUid:', error);
    throw new Error('Error updating rfid_uid');
  }
};

// Fungsi untuk verifikasi password
const verifyPassword = async (inputPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(inputPassword, hashedPassword);
  } catch (error) {
    console.error('Error in verifyPassword:', error);
    throw new Error('Error verifying password');
  }
};

// Fungsi untuk membuat JWT
const generateJwt = (userId, username, role) => {
  try {
    return jwt.sign({ id: userId, username, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  } catch (error) {
    console.error('Error in generateJwt:', error);
    throw new Error('Error generating JWT');
  }
};

module.exports = {
  findUserByUsername,
  createUser,
  verifyPassword,
  generateJwt,
  updateRfidUid  // Menambahkan fungsi ini
};
