const { Router } = require('express');
const OrderController = require('../controllers/OrderController');

const router = Router();
const orderRoute = '/order';

router.post(orderRoute, async (req, res) => {
  try {
    res.send(await OrderController.createOrder(req.body));
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = { router };
