const Order = require('../models/Order');

const createOrder = async () => {
  const newOrder = await Order.create({});
  return newOrder;
};

/**
 * Criar varias orders a partir de uma lista. Juntar todos os itens de uma mesma loja dentro de uma storeOrder/Order
 * */
// const createOrders = async () => {

//   const newOrders = await Order.bulkCreate()
// }
