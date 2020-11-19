import { Router } from 'express';

import ProductRoutes from './ProductRoutes';
import StoreRoutes from './StoreRoutes';

const router: Router = Router();

router.use(ProductRoutes.router);
router.use(StoreRoutes.router);

export default { router };
