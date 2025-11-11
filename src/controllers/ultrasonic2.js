// /controllers/ultrasonic2.js
const ultrasonicService = require('../services/ultrasonic2.js');

const ultrasonicController = {
  getAllUltrasonic: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
      const ultrasonics = await ultrasonicService.getAllUltrasonic(limit, offset);
      const totalUltrasonic = await ultrasonicService.countUltrasonic();
      const totalPages = Math.ceil(totalUltrasonic / limit);
      const currentPage = page;

      return res.status(200).json({
        ultrasonics,
        pagination: {
          totalUltrasonic,
          totalPages,
          currentPage,
          perPage: limit,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to retrieve data', error: error.message });
    }
  },

  createUltrasonic: async (req, res) => {
    const { distance, is_active } = req.body;

    if (distance == null || is_active == null) {
      return res.status(400).json({
        message: 'Both distance and is_active fields are required.'
      });
    }

    try {

      const newUltrasonic = await ultrasonicService.createUltrasonic({
        distance,
        is_active
      });

      return res.status(201).json(newUltrasonic);  // Mengembalikan data yang baru dibuat
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create ultrasonic data', error: error.message });
    }
  }
};

module.exports = ultrasonicController;
