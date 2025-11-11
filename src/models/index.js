// /models/index.js
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config.json');
const db = {};

const sequelize = new Sequelize(config.development); // Menginisialisasi sequelize dengan konfigurasi

// Membaca dan mengimpor semua model
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== 'index.js' &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Menambahkan asosiasi antar model setelah semua model diimpor
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Menambahkan sequelize dan Sequelize ke objek db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
