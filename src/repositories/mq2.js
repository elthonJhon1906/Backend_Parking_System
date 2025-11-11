// /repositories/mq2.js
const { sequelize } = require('../models'); // Mengimpor sequelize dari models/index.js

const mq2Repository = {
  getAllMq2: async (limit, offset) => {
    try {
      const mq2s = await sequelize.models.mq2.findAll({
        limit: limit,
        offset: offset
      });
      return mq2s;
    } catch (error) {
      throw new Error('Error fetching mq2 data from database');
    }
  },

  countMq2: async () => {
    try {
      return await sequelize.models.mq2.count();
    } catch (error) {
      throw new Error('Error counting mq2 data');
    }
  },

  createMq2: async (mq2Data) => {
    try {
      return await sequelize.models.mq2.create(mq2Data);
    } catch (error) {
      throw new Error('Error creating mq2 data');
    }
  }
};

module.exports = mq2Repository;
