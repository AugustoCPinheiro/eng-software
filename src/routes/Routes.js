const { Router } = require('express');
const StoreRoutes = require('./StoreRoutes');

const ProductRoutes = require('./ProductRoutes');
const UserRoutes = require('./UserRoutes');
const OrderRoutes = require('./OrderRoutes');

const router = Router();

router.use(ProductRoutes.router);
router.use(StoreRoutes.router);
router.use(UserRoutes.router);
router.use(OrderRoutes.router);
module.exports = { router };
