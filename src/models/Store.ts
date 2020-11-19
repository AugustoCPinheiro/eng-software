import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Product from './Product';

class Store extends Model {
  public id!: number;

  public name!: string;

  public street!: string;

  public buildingNumber!: string;

  public neighborhood!: string;
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

export default Store;
