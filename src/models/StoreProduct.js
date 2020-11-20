const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');
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

module.exports = StoreProduct