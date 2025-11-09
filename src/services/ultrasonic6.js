const ultrasonicRepository = require('../repositories/ultrasonic6.js');

const ultrasonicService = {
  getAllUltrasonic: async (limit, offset) => {
    try {
      return await ultrasonicRepository.getAllUltrasonic(limit, offset);
    } catch (error) {
      console.error('Error in getAllUltrasonic service:', error);
      throw new Error('Error fetching ultrasonic data');
    }
  },

  countUltrasonic: async () => {
    try {
      return await ultrasonicRepository.countUltrasonic();
    } catch (error) {
      console.error('Error in countUltrasonic service:', error);
      throw new Error('Error counting ultrasonic data');
    }
  },

  createUltrasonic: async (ultrasonicData) => {
    try {
      return await ultrasonicRepository.createUltrasonic(ultrasonicData);
    } catch (error) {
      console.error('Error in createUltrasonic service:', error);
      throw new Error('Error creating ultrasonic data');
    }
  }
};

module.exports = ultrasonicService;
