const { Router } = require('express');

const ProductController = require('../controllers/ProductController');

const router = Router();
const productRoute = '/product';

router.post(productRoute, async (req, res) => {
  try {
    res.send(await ProductController.createProduct(req.body));
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete(`${productRoute}/:id`, async (req, res) => {
  const { id } = req.params;
  await ProductController.deleteProduct(parseInt(id, 10));
  res.status(204).send();
});

router.get(productRoute, async (_, res) => {
  res.send(await ProductController.listProduct());
});

router.get(`${productRoute}/:id`, async (req, res) => {
  const { id } = req.params;
  res.send(await ProductController.getProduct(parseInt(id, 10)));
});

router.get(`${productRoute}/:id/price`, async (req, res) => {
  const { id } = req.params;
  res.send(await ProductController.getProductBestPrices(parseInt(id, 10)));
});

module.exports = { router };
