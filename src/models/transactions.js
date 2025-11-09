// /models/transactions.js
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,  // Menghilangkan ZEROFILL, cukup dengan UNSIGNED
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('TOP_UP', 'PAYMENT_BILL'),
      allowNull: false,
      defaultValue: "PAYMENT_BILL"
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',  // Nama model `users`
        key: 'id'        // Mengacu pada kolom `id` di tabel `users`
      }
    }
  }, {
    sequelize,
    tableName: 'transactions',
    timestamps: true,  // Kolom `createdAt` dan `updatedAt` akan otomatis ditambahkan
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_transactions_users_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
        ]
      },
    ]
  });
};
