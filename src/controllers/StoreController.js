const Store = require('../models/Store');

const createStore = async () => {
  const newStore = await Store.create({});
  return newStore;
};

const listStores = async () => Store.findAll();

module.exports = { createStore, listStores };
