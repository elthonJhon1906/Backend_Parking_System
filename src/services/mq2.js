const mq2Repository = require('../repositories/mq2.js');

const mq2Service = {
  getAllMq2: async (limit, offset) => {
    try {
      return await mq2Repository.getAllMq2(limit, offset);
    } catch (error) {
      console.error('Error in getAllMq2 service:', error);
      throw new Error('Error fetching mq2 data');
    }
  },

  countMq2: async () => {
    try {
      return await mq2Repository.countMq2();
    } catch (error) {
      console.error('Error in countMq2 service:', error);
      throw new Error('Error counting mq2 data');
    }
  },

  createMq2: async (mq2Data) => {
    try {
      return await mq2Repository.createMq2(mq2Data);
    } catch (error) {
      console.error('Error in createMq2 service:', error);
      throw new Error('Error creating mq2 data');
    }
  }
};

module.exports = mq2Service;
