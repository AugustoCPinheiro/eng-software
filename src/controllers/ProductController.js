const sequelize = require('../config/sequelize');
const Product = require('../models/Product');
const Store = require('../models/Store');
const StoreProduct = require('../models/StoreProduct');

const createProduct = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  product.destroy();
};
const createProductToStore = async (productWithStore) => {
  const product = await Product.create(
    { ...productWithStore },
    { include: [Store] },
  );
  return product;
};
const listProduct = async () => Product.findAll();

const getProduct = async (id) => Product.findByPk(id);

const getProductBestPrices = async (id) => StoreProduct.findAll({
    where: {
      ProductId: id,
    },
    attributes: ['unitPrice'],
    limit: 3,
    order: [['unitPrice', 'ASC']],
    include: { model: Store },
  });

module.exports = {
  createProduct,
  deleteProduct,
  listProduct,
  getProduct,
  getProductBestPrices,
  createProductToStore,
};
