const movies = [
  {
    movie_id: '5aa7b461-c3ab-4c7b-b875-f77ead576309',
    movie_title: 'Die Hard',
    title_year: 1988,
    genre: 'Action',
    duration: 132,
  },
  {
    movie_id: '03168281-0452-4e86-b331-45f7a634e219',
    movie_title: 'No Country for Old Men',
    title_year: 2007,
    genre: 'Drama',
    duration: 122,
  },
  {
    movie_id: '8dd405eb-efd6-46f5-9b4d-a5e93a285aff',
    movie_title: 'The Dark Knight',
    title_year: 2008,
    genre: 'Action',
    duration: 152,
  },
  {
    movie_id: 'd6855177-bf21-4cd0-9bb2-63214dff5508',
    movie_title: 'Avengers: Infinity War',
    title_year: 2018,
    genre: 'Action',
    duration: 149,
  },
  {
    movie_id: '1ee1cb09-37b8-429a-8912-c50f144495ca',
    movie_title: 'Avengers: Endgame',
    title_year: 2019,
    genre: 'Action',
    duration: 181,
  },
  {
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    movie_title: 'The Gentlemen',
    title_year: 2019,
    genre: 'Action',
    duration: 113,
  },
]

exports.seed = async knex => {
  await knex('movies').del();
  await knex('movies').insert(movies);
}