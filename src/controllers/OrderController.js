const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const User = require('../models/User');

const createOrder = async (order) => {
  const newOrder = await Order.create(
    { ...order },
    {
      include: [{ model: OrderItem }],
    },
  );
  return Order.findByPk(newOrder.id, {
    attributes: ['id', 'paymentMethod'],
    include: [
      { model: OrderItem, attributes: ['amount', 'StoreProductId'] },
      { model: User, attributes: ['name', 'id'] },
    ],
  });
};

/**
 * Criar varias orders a partir de uma lista. Juntar todos os itens de uma mesma loja dentro de uma storeOrder/Order
 * */
// const createOrders = async () => {

//   const newOrders = await Order.bulkCreate()
// }

module.exports = { createOrder };
