import { Router } from 'express';
import { userSignUp } from '../controllers/authenticationController.js';

const router = Router();

router.post('/sign-up', userSignUp);

export default router;
