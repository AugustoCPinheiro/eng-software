import { Model, DataTypes } from 'sequelize';
import ProductMeasure from './ProductMeasure';
import sequelize from '../config/sequelize';

class Product extends Model {
  public id!: number;

  public name!: string;

  public description!: string;

  public measure!: ProductMeasure;

  public measuredValue!: number;

  public createdAt!: Date;
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
    },
    description: {
      type: new DataTypes.STRING(255),
    },
    measure: {
      type: new DataTypes.STRING(8),
    },
    measuredValue: {
      type: new DataTypes.INTEGER(),
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

export default Product;
