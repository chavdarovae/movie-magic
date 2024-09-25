import uniqid from 'uniqid';
import movieData from '../data/movie-data.js';

const getAll = (filter) =>  movieData.getAll(filter);

const getOneById = (id) => movieData.getOneById(id);

const create = (movie) => {
    movie.id = uniqid();
    movie.rating = Number(movie.rating); // business logic comes in here
    return movieData.create(movie);
};

const filter = (id) => movieData.getOneById(id);

export default {
    getAll,
    getOneById,
    create
}