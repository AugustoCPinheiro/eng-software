const StoreProduct = require('../models/StoreProduct');

const createStoreProduct = async (storeProduct) => {
  const newStoreProduct = await StoreProduct.create(storeProduct);
  return newStoreProduct;
};

module.exports = { createStoreProduct };
