const usersRepository = require('../repositories/users.js');

const usersService = {
  getAllUsers: async (limit, offset) => {
    try {
      return await usersRepository.getAllUsers(limit, offset);
    } catch (error) {
      console.error('Error in getAllUsers service:', error);
      throw new Error('Error fetching users data');
        }
    },

    countUsers: async () => {
    try {
      return await usersRepository.countUsers();
    } catch (error) {
      console.error('Error in countUsers service:', error);
      throw new Error('Error counting users data');
    }
  },

}

module.exports = usersService;
