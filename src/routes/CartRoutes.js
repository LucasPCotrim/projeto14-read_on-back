import { Router } from 'express';
import getCart from '../controllers/getCartController.js';
import setCart from '../controllers/setCartController.js';
import validationCart from '../middleware/newCartMiddleware.js';
import checkToken from '../middleware/authorizeUserMiddleware.js';

const router = Router();

router.get('/Cart', checkToken, getCart);
router.post('/Cart', checkToken, validationCart, setCart);

export default router;