const { Router } = require('express');
const StoreController = require('../controllers/StoreController');
const StoreProductController = require('../controllers/StoreProductController');

const router = Router();
const storeRoute = '/store';

router.post(storeRoute, async (req, res) => {
  res.send(await StoreController.createStore(req.body));
});

router.get(storeRoute, async (_, res) => {
  res.send(await StoreController.listStores());
});

router.post(`${storeRoute}/:id/product`, async (req, res) => {
  const { id } = req.params;
  try {
    const newStoreProduct = await StoreProductController.createStoreProduct({
      ...req.body,
      StoreId: id,
    });

    res.send(newStoreProduct);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = { router };
