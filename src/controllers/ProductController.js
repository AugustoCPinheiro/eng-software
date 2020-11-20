const Product = require('../models/Product');

const createProduct = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  product.destroy();
};

const listProduct = async () => Product.findAll();

const getProduct = async (id) => Product.findByPk(id);

module.exports = {
  createProduct,
  deleteProduct,
  listProduct,
  getProduct,
};
