import { Router } from 'express';
import getCart from '../controllers/getCartController.js';
import setCart from '../controllers/setCartController.js';
import validationCart from '../middleware/updateCartMiddleware.js';
import checkToken from '../middleware/authorizeUserMiddleware.js';

const router = Router();

router.get('/cart', checkToken, getCart);
router.post('/cart', checkToken, validationCart, setCart);

export default router;