const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Order = require('./Order');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
    },
  },
  { tableName: 'users', sequelize },
);

// User.hasMany(Order);

module.exports = User;
