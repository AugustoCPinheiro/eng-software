const { Router } = require('express');
const StoreRoutes = require('./StoreRoutes');

const ProductRoutes = require('./ProductRoutes');
const UserRoutes = require('./UserRoutes');

const router = Router();

router.use(ProductRoutes.router);
router.use(StoreRoutes.router);
router.use(UserRoutes.router);
module.exports = { router };
