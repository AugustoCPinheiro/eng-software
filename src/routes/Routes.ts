import { Response, Router } from 'express';
import ProductController from '../controllers/ProductController';

const router: Router = Router();
const productRoute: string = '/product';

router.post(productRoute, (_, res: Response) => {
  res.send(ProductController.createProduct());
});
export default { router };
