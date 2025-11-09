// /migrations/YYYYMMDDHHMMSS-rename-mq2_copy1-to-mq2.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Mengubah nama tabel 'mq2_copy1' menjadi 'mq2'
    await queryInterface.renameTable('mq2_copy1', 'mq2');
  },

  down: async (queryInterface, Sequelize) => {
    // Jika rollback, kembalikan tabel 'mq2' ke 'mq2_copy1'
    await queryInterface.renameTable('mq2', 'mq2_copy1');
  }
};
