// /repositories/users.js
const { sequelize } = require('../models'); // Mengimpor sequelize dari models/index.js

const usersRepository = {
  getAllUsers: async (limit, offset) => {
    try {
      const users = await sequelize.models.users.findAll({
        limit: limit,
        offset: offset
      });
      return users;
    } catch (error) {
      throw new Error('Error fetching users data from database');
    }
  },
   countUsers: async () => {
    try {
      return await sequelize.models.users.count();
    } catch (error) {
      throw new Error('Error counting users data');
    }
  },
}

module.exports = usersRepository;
