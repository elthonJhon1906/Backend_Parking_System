const flame_sensorRepository = require('../repositories/flame_sensor.js');

const flame_sensorService = {
  getAllFlame_sensor: async (limit, offset) => {
    try {
      return await flame_sensorRepository.getAllFlame_sensor(limit, offset);
    } catch (error) {
      console.error('Error in getAllFlame_sensor service:', error);
      throw new Error('Error fetching flame_sensor data');
    }
  },

  countFlame_sensor: async () => {
    try {
      return await flame_sensorRepository.countFlame_sensor();
    } catch (error) {
      console.error('Error in countFlame_sensor service:', error);
      throw new Error('Error counting flame_sensor data');
    }
  },

  createFlame_sensor: async (flame_sensorData) => {
    try {
      return await flame_sensorRepository.createFlame_sensor(flame_sensorData);
    } catch (error) {
      console.error('Error in createFlame_sensor service:', error);
      throw new Error('Error creating flame_sensor data');
    }
  }
};

module.exports = flame_sensorService;
