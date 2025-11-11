// /repositories/ultrasonic3.js
const { sequelize } = require('../models'); // Mengimpor sequelize dari models/index.js

const ultrasonicRepository = {
  getAllUltrasonic: async (limit, offset) => {
    try {
      const ultrasonics = await sequelize.models.ultrasonic3.findAll({
        limit: limit,
        offset: offset
      });
      return ultrasonics;
    } catch (error) {
      throw new Error('Error fetching ultrasonic data from database');
    }
  },

  countUltrasonic: async () => {
    try {
      return await sequelize.models.ultrasonic3.count();
    } catch (error) {
      throw new Error('Error counting ultrasonic data');
    }
  },

  createUltrasonic: async (ultrasonicData) => {
    try {
      return await sequelize.models.ultrasonic3.create(ultrasonicData);
    } catch (error) {
      throw new Error('Error creating ultrasonic data');
    }
  }
};

module.exports = ultrasonicRepository;
