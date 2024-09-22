import { Router } from 'express';
import movieService from '../services/movie-service.js';

const router = Router();

router.get('/create', async (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;
    await movieService.create(movieData);
    res.redirect('/');
});

router.get('/:movieId', async (req, res) => {
    const movie = await movieService.getMovieById(req.params.movieId);
    res.render('movies/details', { movie });
});

export default router;