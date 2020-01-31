const Router = require('express-promise-router');
const db = require('../db');
const { getMoviesForCinema } = require('./lib/movies');

const router = new Router();

router.get('/', async (req, res) => {
    const rows = await db('venues')
        .orderBy('cinema_id');

    res.status(200).json(rows);
});

router.get('/:cinema_id', async (req, res) => {
    const { cinema_id } = req.params

    const rows = await db('venues')
        .where('cinema_id', cinema_id);
    
    const moviesArray = await getMoviesForCinema(cinema_id);
    const responseObject = {
        ...rows[0],
        movies: moviesArray
    }

    res.status(200).json(responseObject);
});

module.exports = router;