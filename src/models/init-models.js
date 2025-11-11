var DataTypes = require("sequelize").DataTypes;
var _flame_sensor = require("./flame_sensor");
var _mq2 = require("./mq2");
var _rfid_in = require("./rfid_in");
var _rfid_out = require("./rfid_out");
var _transactions = require("./transactions");
var _ultrasonic1 = require("./ultrasonic1");
var _ultrasonic2 = require("./ultrasonic2");
var _ultrasonic3 = require("./ultrasonic3");
var _ultrasonic4 = require("./ultrasonic4");
var _ultrasonic5 = require("./ultrasonic5");
var _ultrasonic6 = require("./ultrasonic6");
var _users = require("./users");

function initModels(sequelize) {
  var flame_sensor = _flame_sensor(sequelize, DataTypes);
  var mq2 = _mq2(sequelize, DataTypes);
  var rfid_in = _rfid_in(sequelize, DataTypes);
  var rfid_out = _rfid_out(sequelize, DataTypes);
  var transactions = _transactions(sequelize, DataTypes);
  var ultrasonic1 = _ultrasonic1(sequelize, DataTypes);
  var ultrasonic2 = _ultrasonic2(sequelize, DataTypes);
  var ultrasonic3 = _ultrasonic3(sequelize, DataTypes);
  var ultrasonic4 = _ultrasonic4(sequelize, DataTypes);
  var ultrasonic5 = _ultrasonic5(sequelize, DataTypes);
  var ultrasonic6 = _ultrasonic6(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  rfid_in.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(rfid_in, { as: "rfid_ins", foreignKey: "users_id"});
  rfid_out.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(rfid_out, { as: "rfid_outs", foreignKey: "users_id"});
  transactions.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(transactions, { as: "transactions", foreignKey: "users_id"});

  return {
    flame_sensor,
    mq2,
    rfid_in,
    rfid_out,
    transactions,
    ultrasonic1,
    ultrasonic2,
    ultrasonic3,
    ultrasonic4,
    ultrasonic5,
    ultrasonic6,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
