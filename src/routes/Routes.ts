import { Router } from 'express';

import ProductRoutes from './ProductRoutes';

const router: Router = Router();

router.use(ProductRoutes.router);

export default { router };
