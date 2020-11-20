const ProductController = require('../ProductController');

jest.mock('../../models/Product', () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  return dbMock.define('products',  {
    id: 2,
    name: 'good',
    description: 'Test',
    measure: "l",
    measureValue: 1
  })
});

describe('ProductController', () => {
  it('should list products', async () => {
    const products = await ProductController.listProduct();
    console.log(products)
    expect(products).toHaveLength(1);
  });
});
