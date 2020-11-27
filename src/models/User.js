const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

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

module.exports = User;
