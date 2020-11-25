const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class OrderItem extends Model {}

OrderItem.init(
  {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: 'orderitems',
    sequelize,
  },
);

module.exports = OrderItem;
