import { Router } from 'express';
import { authorizeUserMiddleware } from '../middleware/authorizeUserMiddleware.js';
import { registerSale } from '../controllers/checkoutController.js';

const router = Router();

router.post('/checkout', authorizeUserMiddleware, registerSale);

export default router;
