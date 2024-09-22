import movieData from '../data/movie-data.js';

const getAll = () => movieData.getAll();

const getMovieById = (id) => movieData.getMovieById(id);

const create = (movie) => movieData.create(movie);

export default {
    getAll,
    getMovieById,
    create
}