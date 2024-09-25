import { Router } from 'express';

import homeController from './controllers/home-controllers.js';
import movieController from './controllers/movie-controller.js';

const router = Router();

router.use(homeController);
router.use('/movies', movieController);
router.all('*', (req, res) => {
    res.render('404');
});


export default router;