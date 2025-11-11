// /repositories/flame_sensor.js
const { sequelize } = require('../models'); // Mengimpor sequelize dari models/index.js

const flame_sensorRepository = {
  getAllFlame_sensor: async (limit, offset) => {
    try {
      const flame_sensors = await sequelize.models.flame_sensor.findAll({
        limit: limit,
        offset: offset
      });
      return flame_sensors;
    } catch (error) {
      throw new Error('Error fetching flame sensor data from database');
    }
  },

  countFlame_sensor: async () => {
    try {
      return await sequelize.models.flame_sensor.count();
    } catch (error) {
      throw new Error('Error counting flame sensor data');
    }
  },

  createFlame_sensor: async (flame_sensorData) => {
    try {
      return await sequelize.models.flame_sensor.create(flame_sensorData);
    } catch (error) {
      throw new Error('Error creating flame sensor data');
    }
  }
};

module.exports = flame_sensorRepository;
