const Order = require('../models/Order');
const User = require('../models/User');

const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

const getUser = async (id) => User.findByPk(id);

const getUserOrders = async (id) => Order.findAll({
    where: {
      UserId: id,
    },
  });

module.exports = { createUser, getUser, getUserOrders };
