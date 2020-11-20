const Product = require('../models/Product');
const Store = require('../models/Store');

const createStore = async (store) => {
  const newStore = await Store.create(store);
  return newStore;
};

const listStores = async () => Store.findAll({
    attributes: [],
    include: { model: Product },
  });

module.exports = { createStore, listStores };
