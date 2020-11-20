const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Product extends Model {
  id;

  name;

  description;

  measure;

  measuredValue;

  createdAt;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(255),
    },
    measure: {
      type: new DataTypes.STRING(8),
      allowNull: false,
    },
    measuredValue: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    createdAt: {
      type: new DataTypes.DATE(),
    },
  },
  {
    tableName: 'products',
    sequelize,
  },
);
module.exports = Product;
