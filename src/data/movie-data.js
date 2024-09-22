import fs from 'fs/promises';
import path from 'path';
import uniqid from 'uniqid';

const dbPath = path.resolve('./src/db.json');

async function getDbData() {
    const db = await fs.readFile(dbPath, {encoding: 'utf-8'});
    return JSON.parse(db);
}

function saveDataInDb(data) {
    return fs.writeFile(dbPath, JSON.stringify(data));
}

async function getAll() {
    const data = await getDbData();
    return data.movies;
}


async function getMovieById(movieId) {
    const data = await getDbData();
    return data.movies.find(m => m.id.toString() === movieId);
}


async function create(movie) {
    const data = await getDbData();
    const newMovie  = {
        id: uniqid(),
        title: movie.title,
        genre: movie.genre,
        director: movie.director,
        year: movie.year,
        imageUrl: movie.image,
        rating: movie.rating,
        description: movie.description,
    }
    data.movies.push(newMovie)
    return saveDataInDb(data);
}

export default {
    getAll,
    getMovieById,
    create
}