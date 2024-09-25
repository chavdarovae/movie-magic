import { Router } from 'express';
import movieService from '../services/movie-service.js';

const router = Router();

router.get('/', async (req, res) => {
    const movies = await movieService.getAll();
    res.render('home', { movies });
});

router.get('/search', async (req, res) => {
    const query = req.query;
    const movies = await movieService.getAll(query);
    res.render('home', {showSearch: true, movies, query });
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

export default router;