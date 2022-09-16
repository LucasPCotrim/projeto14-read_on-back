import { Router } from 'express';
import getProducts from '../controllers/getProductsController.js';
import setProducts from '../controllers/setProductsController.js';
import validationProducts from '../middleware/newProductsMiddleware.js';

const router = Router();

router.get('/products', getProducts);
router.post('/products', validationProducts, setProducts);

export default router;
