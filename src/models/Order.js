const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

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

module.exports = Order;
