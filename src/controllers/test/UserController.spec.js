const User = require('../../models/User');
const UserController = require('../UserController');
jest.mock("sequelize")
jest.mock('../../models/User')

describe('ProductController', () => {
  it('should call create', async () => {
    User.create = jest.fn()
    const products = await UserController.createUser({})
    console.log(products)
    expect(User.create).toHaveBeenCalled();
  });
});
