import { Router } from 'express';
import { authorizeUserMiddleware } from '../middleware/authorizeUserMiddleware';

const router = Router();

router.post('/checkout', authorizeUserMiddleware, registerSale);

export default router;
