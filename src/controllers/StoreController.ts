import Store from '../models/Store';

const createStore = async (): Promise<Store> => {
  const newStore = await Store.create({});
  return newStore;
};

export default { createStore };
