import { Router } from 'express';
import { refreshTokenController } from '../controllers/refreshController.js';
import { validate } from '../middlewares/validate.js';
import { refreshTokenSchema } from '../schemas/auth.js';

const router = Router();

router.post(
  '/refresh-token',
  validate(refreshTokenSchema),
  refreshTokenController
);

export default router;
