import { Request, Response, Router } from 'express';
import ProductController from '../controllers/ProductController';

const router: Router = Router();
const productRoute: string = '/product';

router.post(productRoute, async (_, res: Response) => {
  res.send(await ProductController.createProduct());
});

router.delete(`${productRoute}/:id`, async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProductController.deleteProduct(parseInt(id, 10));
  res.send();
});

router.get(productRoute, async (_, res: Response) => {
  res.send(await ProductController.listProduct());
});

export default { router };
