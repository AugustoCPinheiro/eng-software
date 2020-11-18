import ProductMeasure from './ProductMeasure';

interface Product {
  id: number;
  name: string;
  description: string;
  measure: ProductMeasure;
  measuredValue: number;
  createdAt: Date;
}

export default Product;
