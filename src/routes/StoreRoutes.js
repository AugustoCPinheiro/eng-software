const { Router } = require('express');
const StoreController = require('../controllers/StoreController');

const router = Router();
const storeRoute = '/store';

router.post(storeRoute, async (req, res) => {
  res.send(await StoreController.createStore(req.body));
});

router.get(storeRoute, async (_, res) => {
  res.send(await StoreController.listStores());
});

module.exports = { router };
