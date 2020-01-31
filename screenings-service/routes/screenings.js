const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

router.get('/', async (req, res) => {
    const rows = await db('screenings')
        .orderBy([{column: 'cinema_id'}, {column: 'screening_date'}, {column: 'screening_time'}]);
    res.status(200).json(rows);
});

router.get('/:cinemaId', async (req, res) => {
    const { cinemaId } = req.params

    const subquery = db('schedules')
        .select('movie_id', 'cinema_id')
        .where('cinema_id', cinemaId)

    const rows = await db('screenings')
        .whereIn(['movie_id', 'cinema_id'], subquery)
        .orderBy([{column: 'screening_date'}, {column: 'screening_time'}]);

    res.status(200).json(rows);
});

module.exports = router;