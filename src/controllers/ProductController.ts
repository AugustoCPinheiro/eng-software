import Product from '../models/Product';

const createProduct = async (): Promise<Product> => {
  const newProduct: Product = await Product.create({});
  return newProduct;
};

const deleteProduct = async (id: number): Promise<void> => {
  const product = await Product.findByPk(id);
  product.destroy();
};

const listProduct = async (): Promise<Product[]> => Product.findAll();

export default { createProduct, deleteProduct, listProduct };
