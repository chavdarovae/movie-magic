import { Router } from 'express';
import movieService from '../services/movie-service.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { movies: movieService.getAll()});
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

export default router;