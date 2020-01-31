const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'movies',
  password: '12345',
  port: 5432,
})

const getMovies = (request, response) => {
    pool.query('SELECT * FROM movies ORDER BY created_at ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = { getMovies }