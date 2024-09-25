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

router.get('/:movieId/details', async (req, res) => {
    const movie = await movieService.getOneById(req.params.movieId);
    movie.ratingView = getRatingPresentation(movie.rating);
    res.render('movies/details', { movie });
});

function getRatingPresentation(rating) {
    if(!Number.isInteger(rating)) {
        return 'n\\a';
    }
    return '&#x2605; '.repeat(rating);
}
export default router;