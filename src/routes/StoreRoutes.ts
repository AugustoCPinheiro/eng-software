import { Request, Response, Router } from 'express';
import StoreController from '../controllers/StoreController';

const router: Router = Router();
const storeRoute: string = '/store';

router.post(storeRoute, async (req: Request, res: Response) => {
  res.send(await StoreController.createStore());
});
export default { router };
