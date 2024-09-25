import fs from 'fs/promises';
import path from 'path';


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


async function getOneById(movieId) {
    const data = await getDbData();
    return data.movies.find(m => m.id.toString() === movieId);
}

async function create(movie) {
    const data = await getDbData();
    data.movies.push(movie);
    return saveDataInDb(data);
}

export default {
    getAll,
    getOneById,
    create
}