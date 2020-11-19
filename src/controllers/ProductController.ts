import Product from '../models/Product';

const createProduct = async (product: Product): Promise<Product> => {
  const newProduct: Product = await Product.create(product);
  return newProduct;
};

const deleteProduct = async (id: number): Promise<void> => {
  const product = await Product.findByPk(id);
  product.destroy();
};

const listProduct = async (): Promise<Product[]> => Product.findAll();

const getProduct = async (id: number): Promise<Product> => Product.findByPk(id);

export default {
  createProduct,
  deleteProduct,
  listProduct,
  getProduct,
};
