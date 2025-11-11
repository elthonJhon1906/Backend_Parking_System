// /models/users.js
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,  // Menandakan bahwa username tidak boleh null
      unique: true // Pastikan username unik
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false // Menandakan bahwa password tidak boleh null
    },
    citizen_id: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    credit: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'member'), // Menambahkan role dengan dua pilihan: admin dan member
      allowNull: false,  // Tidak boleh null
      defaultValue: 'member'  // Defaultnya adalah 'member' jika tidak ada yang dikirimkan
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: "created_at", // Nama kolom untuk createdAt
    updatedAt: false, // Tidak menggunakan kolom updatedAt
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
        name: "username_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" }, // Index untuk memastikan username unik
        ]
      },
    ]
  });
};
