const authRepository = require('../repositories/authRepository.js');
const { sequelize } = require('../models');

// Register user baru
const register = async (req, res) => {
  const { name, username, password, credit, citizen_id, role } = req.body;  // Pastikan ada role

  try {
    // Cek apakah user sudah ada
    const existingUser = await authRepository.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Default role ke 'member' jika tidak ada role yang diberikan
    const userRole = role || 'member';

    // Buat user baru
    const newUser = await authRepository.createUser({ name, username, password, credit, citizen_id, role: userRole });
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error in register:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Login user dan generate token JWT
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authRepository.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await authRepository.verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Sertakan role dalam payload JWT
    const token = authRepository.generateJwt(user.id, user.username, user.role);
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error in login:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update credit user
const updateCredit = async (req, res) => {
  const { userId } = req.params;
  const { newCredit } = req.body;

  try {
    const updatedUser = await authRepository.updateUserCredit(userId, newCredit);
    return res.status(200).json({ message: 'Credit updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error in updateCredit:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const getRfidData = async (req, res) => {
  const { userId } = req.params;

  try {
    const rfidInData = await sequelize.models.rfid_in.findAll({
      where: { users_id: userId },
      attributes: ['id', 'created_at']
    });

    const rfidOutData = await sequelize.models.rfid_out.findAll({
      where: { users_id: userId },
      attributes: ['id', 'created_at']
    });

    const combinedData = [
      ...rfidInData.map(rfid => ({ type: 'rfid_in', createdAt: rfid.created_at })),
      ...rfidOutData.map(rfid => ({ type: 'rfid_out', createdAt: rfid.created_at }))
    ];

    combinedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return res.status(200).json(combinedData);
  } catch (error) {
    console.error('Error fetching rfid data:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { register, login, updateCredit, getRfidData };
