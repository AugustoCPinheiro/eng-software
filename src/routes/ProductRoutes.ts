import { Request, Response, Router } from 'express';
import ProductController from '../controllers/ProductController';
import Product from '../models/Product';

const router: Router = Router();
const productRoute: string = '/product';

router.post(productRoute, async (req: Request<Product>, res: Response) => {
  try {
    res.send(await ProductController.createProduct(req.body));
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete(`${productRoute}/:id`, async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProductController.deleteProduct(parseInt(id, 10));
  res.send();
});

router.get(productRoute, async (_, res: Response) => {
  res.send(await ProductController.listProduct());
});

router.get(`${productRoute}/:id`, async (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(await ProductController.getProduct(parseInt(id, 10)));
});

export default { router };
