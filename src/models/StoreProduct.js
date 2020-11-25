const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');
const Order = require("./Order");
const OrderItem = require("./OrderItem");
class StoreProduct extends Model{
    unitPrice
}

StoreProduct.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    unitPrice: {
      type: new DataTypes.FLOAT(),
      allowNull: false,
    }
},
{
  tableName: 'storeproducts',
  sequelize,
},)

StoreProduct.belongsToMany(Order, {through: OrderItem})
Order.belongsToMany(StoreProduct, {through: OrderItem})
StoreProduct.hasMany(OrderItem)
Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)
OrderItem.belongsTo(StoreProduct)

module.exports = StoreProduct