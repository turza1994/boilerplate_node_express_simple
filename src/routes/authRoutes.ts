import { Router } from 'express';
import { signupController, loginController } from '../controllers/authController.js';
import { validate } from '../middlewares/validate.js';
import { signupSchema, loginSchema } from '../schemas/auth.js';

const router = Router();

router.post('/signup', validate(signupSchema), signupController);
router.post('/login', validate(loginSchema), loginController);

export default router;