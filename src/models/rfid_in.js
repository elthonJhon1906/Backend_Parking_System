// /models/rfid_in.js
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rfid_in', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',  // Menyebutkan model `users`
        key: 'id'        // Kolom yang menjadi referensi (id di tabel users)
      }
    }
  }, {
    sequelize,
    tableName: 'rfid_in',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,    
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
        name: "fk_rfid_in_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
        ]
      },
    ]
  });
};
