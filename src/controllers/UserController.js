const User = require('../models/User');

const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};
module.exports = { createUser };
