const ultrasonicRepository = require('../repositories/ultrasonic2.js');

const ultrasonicService = {
  getAllUltrasonic: async (limit, offset) => {
    try {
      return await ultrasonicRepository.getAllUltrasonic(limit, offset);
    } catch (error) {
      throw new Error('Error fetching ultrasonic data');
    }
  },

  countUltrasonic: async () => {
    try {
      return await ultrasonicRepository.countUltrasonic();
    } catch (error) {
      throw new Error('Error counting ultrasonic data');
    }
  },

  createUltrasonic: async (ultrasonicData) => {
    try {
      return await ultrasonicRepository.createUltrasonic(ultrasonicData);
    } catch (error) {
      throw new Error('Error creating ultrasonic data');
    }
  }
};

module.exports = ultrasonicService;
