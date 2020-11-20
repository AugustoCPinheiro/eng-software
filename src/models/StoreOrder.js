const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class StoreOrder extends Model {}

StoreOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['0', '1', '2'],
      comment: '0 - open, 1 - closed, 2 - canceled',
      defaultValue: '0',
      allowNull: false,
    },
  },
  {
    tableName: 'storeorders',
    sequelize,
  },
);

module.exports = StoreOrder;
