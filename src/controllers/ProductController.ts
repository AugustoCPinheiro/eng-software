import Product from '../models/Product';
import ProductMeasure from '../models/ProductMeasure';

const createProduct = (): Product => ({
  createdAt: new Date(),
  description: '',
  id: 1,
  measure: ProductMeasure.KG,
  measuredValue: 2,
  name: '',
});

export default { createProduct };
