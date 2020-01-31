const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

router.get('/', async (req, res) => {
    const rows = await db('movies')
        .orderBy('created_at', 'asc');

    res.status(200).json(rows);
});

router.get('/:movie_id', async (req, res) => {
    const { movie_id } = req.params;

    const rows = await db('movies')
        .where('id', movie_id);

    res.status(200).json(rows);
});

module.exports = router;