import { Router } from 'express';
import getCart from '../controllers/getCartController.js';
import setCart from '../controllers/setCartController.js';
import validationCart from '../middleware/updateCartMiddleware.js';
import authorizeUserMiddleware from '../middleware/authorizeUserMiddleware.js';

const router = Router();

router.get('/cart', authorizeUserMiddleware, getCart);
router.post('/cart', authorizeUserMiddleware, validationCart, setCart);

export default router;
