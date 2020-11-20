const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Product = require('./Product');

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

const StoreProduct = sequelize.define('StoreProduct', {
  unitPrice: DataTypes.INTEGER(),
});

Store.belongsToMany(Product, { through: StoreProduct });
Product.belongsToMany(Store, { through: StoreProduct });

module.exports = Store;
