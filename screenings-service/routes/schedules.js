const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

router.get('/', async (req, res) => {
    const rows = await db('schedules');

    res.status(200).json(rows);
});

router.get('/:cinemaId', async (req, res) => {
    const { cinemaId } = req.params

    const rows = await db('schedules')
        .where('cinema_id', cinemaId)

    res.status(200).json(rows);
});


module.exports = router;