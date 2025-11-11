// /controllers/flame_sensor.js
const flame_sensorService = require('../services/flame_sensor.js');

const flame_sensorController = {
  getAllFlame_sensor: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
      const flame_sensors = await flame_sensorService.getAllFlame_sensor(limit, offset);
      const totalFlame_sensor = await flame_sensorService.countFlame_sensor();
      const totalPages = Math.ceil(totalFlame_sensor / limit);
      const currentPage = page;

      return res.status(200).json({
        flame_sensors,
        pagination: {
          totalFlame_sensor,
          totalPages,
          currentPage,
          perPage: limit,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to retrieve data', error: error.message });
    }
  },

  createFlame_sensor: async (req, res) => {
    const { value, is_active } = req.body;

    if (value == null || is_active == null) {
      return res.status(400).json({
        message: 'Both value and is_active fields are required.'
      });
    }

    try {

      const newFlame_sensor = await flame_sensorService.createFlame_sensor({
        value,
        is_active
      });

      return res.status(201).json(newFlame_sensor);  // Mengembalikan data yang baru dibuat
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create flame sensor data', error: error.message });
    }
  }
};

module.exports = flame_sensorController;
