import { Router } from 'express';
import getProducts from '../controllers/getProductsController.js';
import setProducts from '../controllers/updateProductController.js';
import validationProducts from '../middleware/updateProductsMiddleware.js';

const router = Router();

router.get('/products', getProducts);
router.put('/products', validationProducts, setProducts);

export default router;
