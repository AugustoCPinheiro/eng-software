const { Router } = require('express');

const UserController = require('../controllers/UserController');

const router = Router();
const userRoute = '/user';

router.post(userRoute, async (req, res) => {
  res.send(await UserController.createUser(req.body));
});

module.exports = { router };
