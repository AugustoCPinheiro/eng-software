const { Router } = require('express');

const UserController = require('../controllers/UserController');

const router = Router();
const userRoute = '/user';

router.post(userRoute, async (req, res) => {
  res.send(await UserController.createUser(req.body));
});
router.get(`${userRoute}/:id`, async (req, res) => {
  const { id } = req.params;
  res.send(await UserController.getUser(id));
});

router.get(`${userRoute}/:id/order`, async (req, res) => {
  const { id } = req.params;
  res.send(await UserController.getUserOrders(id));
});
module.exports = { router };
