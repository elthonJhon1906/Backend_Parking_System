const rfidService = require('../services/rfid_services.js');

const rfidController = {
  // Endpoint untuk membuat rfid_in
  createRfidIn: async (req, res) => {
    const { userId } = req.params;

    try {
      const rfidIn = await rfidService.createRfidIn(userId);
      return res.status(201).json({
        message: 'rfid_in created successfully',
        rfid_in: rfidIn
      });
    } catch (error) {
      console.error('Error in createRfidIn controller:', error);
      return res.status(500).json({ message: 'Error creating rfid_in', error: error.message });
    }
  },

  // Endpoint untuk membuat rfid_out
  createRfidOut: async (req, res) => {
    const { userId } = req.params;

    try {
      const rfidOut = await rfidService.createRfidOut(userId);
      return res.status(201).json({
        message: 'rfid_out created successfully',
        rfid_out: rfidOut
      });
    } catch (error) {
      console.error('Error in createRfidOut controller:', error);
      return res.status(500).json({ message: 'Error creating rfid_out', error: error.message });
    }
  }
};

module.exports = rfidController;
