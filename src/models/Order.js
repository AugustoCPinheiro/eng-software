const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./User');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    paymentMethod: {
      type: DataTypes.STRING(255),
      defaultValue: 'NOT_INFORMED',
    },
  },
  {
    tableName: 'orders',
    sequelize,
  },
);

Order.belongsTo(User);
User.hasMany(Order);

module.exports = Order;
