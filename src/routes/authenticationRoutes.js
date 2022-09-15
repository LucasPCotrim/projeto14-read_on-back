import { Router } from 'express';
import { userSignUp, userLogin } from '../controllers/authenticationController.js';

const router = Router();

router.post('/sign-up', userSignUp);
router.post('/login', userLogin);

export default router;
