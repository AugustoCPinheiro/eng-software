const StoreOrder = require('../models/StoreOrder');

const createStoreOrder = async () => {
  const newStoreOrder = await StoreOrder.create({});
  return newStoreOrder;
};

module.exports = { createStoreOrder };
