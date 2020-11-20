const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Order = require('./Order');
const Product = require('./Product');
const StoreOrder = require('./StoreOrder');
const StoreProduct = require('./StoreProduct');

class Store extends Model {
  id;

  name;

  street;

  buildingNumber;

  neighborhood;
}

Store.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
    },
    street: {
      type: new DataTypes.STRING(255),
    },
    buildingNumber: {
      type: new DataTypes.INTEGER(),
    },
    neighborhood: {
      type: new DataTypes.STRING(255),
    },
  },
  {
    tableName: 'stores',
    sequelize,
  },
);


//-----------------------------------------------
Store.belongsToMany(Order, {through: StoreOrder})
Order.belongsToMany(Store, {through: StoreOrder})
Store.hasMany(StoreOrder)
Order.hasMany(StoreOrder)
StoreOrder.belongsTo(Store)
StoreOrder.belongsTo(Order)
//------------------------------------------------------
Store.belongsToMany(Product, { through: StoreProduct });
Product.belongsToMany(Store, { through: StoreProduct });
Store.hasMany(StoreProduct)
Product.hasMany(StoreProduct)
StoreProduct.belongsTo(Store)
StoreProduct.belongsTo(Product)
//------------------------------------------------------

module.exports = Store;
