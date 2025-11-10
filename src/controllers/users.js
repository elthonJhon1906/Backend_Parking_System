// /controllers/users.js
const { getAllUsers } = require('../repositories/users.js');
const usersService = require('../services/users.js');

const usersController = {
  getAllUsers: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
      const users = await usersService.getAllUsers(limit, offset);
      const totalUsers = await usersService.countUsers();
      const totalPages = Math.ceil(totalUsers / limit);
      const currentPage = page;

      return res.status(200).json({
        users,
        pagination: {
          totalUsers,
          totalPages,
          currentPage,
          perPage: limit,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to retrieve data', error: error.message });
    }
  },

  createUsers: async (req, res) => {
    const { value, is_active } = req.body;

    if (value == null || is_active == null) {
      return res.status(400).json({
        message: 'Both value and is_active fields are required.'
      });
    }

    try {

      const newUsers = await usersService.createUsers({
        value,
        is_active
      });

      return res.status(201).json(newUsers);  // Mengembalikan data yang baru dibuat
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create users data', error: error.message });
    }
  }
};

module.exports = usersController;
