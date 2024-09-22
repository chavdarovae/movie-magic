import { Router } from 'express';

import homeController from './controllers/home-controllers.js';

const router = Router();

router.use(homeController);


export default router;