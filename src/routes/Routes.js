const { Router } = require('express');
const StoreRoutes = require('./StoreRoutes');

const ProductRoutes = require('./ProductRoutes');

const router = Router();

router.use(ProductRoutes.router);
router.use(StoreRoutes.router);

module.exports = { router };
