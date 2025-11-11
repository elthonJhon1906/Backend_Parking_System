// /controllers/mq2.js
const mq2Service = require('../services/mq2.js');

const mq2Controller = {
  getAllMq2: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
      const mq2s = await mq2Service.getAllMq2(limit, offset);
      const totalMq2 = await mq2Service.countMq2();
      const totalPages = Math.ceil(totalMq2 / limit);
      const currentPage = page;

      return res.status(200).json({
        mq2s,
        pagination: {
          totalMq2,
          totalPages,
          currentPage,
          perPage: limit,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to retrieve data', error: error.message });
    }
  },

  createMq2: async (req, res) => {
    const { value, is_active } = req.body;

    if (value == null || is_active == null) {
      return res.status(400).json({
        message: 'Both value and is_active fields are required.'
      });
    }

    try {

      const newMq2 = await mq2Service.createMq2({
        value,
        is_active
      });

      return res.status(201).json(newMq2);  // Mengembalikan data yang baru dibuat
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create mq2 data', error: error.message });
    }
  }
};

module.exports = mq2Controller;
