'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Menambahkan kolom users_id pada tabel rfid_in, rfid_out, dan transactions.
     */
    await queryInterface.addColumn('rfid_in', 'users_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',  // Nama tabel referensi
        key: 'id'        // Kolom yang menjadi referensi
      }
    });

    await queryInterface.addColumn('rfid_out', 'users_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    });

    await queryInterface.addColumn('transactions', 'users_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Menghapus kolom users_id dari tabel rfid_in, rfid_out, dan transactions jika migrasi dibatalkan.
     */
    await queryInterface.removeColumn('rfid_in', 'users_id');
    await queryInterface.removeColumn('rfid_out', 'users_id');
    await queryInterface.removeColumn('transactions', 'users_id');
  }
};
