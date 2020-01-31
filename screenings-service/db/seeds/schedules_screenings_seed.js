const schedules = [
  {
    cinema_id: 1,
    movie_id: '1ee1cb09-37b8-429a-8912-c50f144495ca',
    start_date: '2019-12-25',
    end_date: '2020-02-03',
  },
  {
    cinema_id: 1,
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    start_date: '2020-01-01',
    end_date: '2020-02-01',
  },
  {
    cinema_id: 2,
    movie_id: '5aa7b461-c3ab-4c7b-b875-f77ead576309',
    start_date: '2020-01-10',
    end_date: '2020-03-01',
  },
]

const screenings = [
  {
    cinema_id: 1,
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    room_number: 1,
    screening_date: '2020-01-01',
    screening_time: '12:00',
    price: 8,
    capacity: 120,
  },
  {
    cinema_id: 1,
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    room_number: 1,
    screening_date: '2020-01-01',
    screening_time: '18:00',
    price: 10,
    capacity: 120,
  },
  {
    cinema_id: 1,
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    room_number: 1,
    screening_date: '2020-01-01',
    screening_time: '21:00',
    price: 15,
    capacity: 120,
  },
  {
    cinema_id: 1,
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    room_number: 1,
    screening_date: '2020-01-02',
    screening_time: '12:00',
    price: 8,
    capacity: 120,
  },
  {
    cinema_id: 1,
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    room_number: 1,
    screening_date: '2020-01-02',
    screening_time: '18:00',
    price: 10,
    capacity: 120,
  },
  {
    cinema_id: 1,
    movie_id: 'e6373c5d-1c51-4b9c-afd9-83201809d703',
    room_number: 1,
    screening_date: '2020-01-02',
    screening_time: '21:00',
    price: 15,
    capacity: 120,
  },
  {
    cinema_id: 1,
    movie_id: '1ee1cb09-37b8-429a-8912-c50f144495ca',
    room_number: 3,
    screening_date: '2020-01-02',
    screening_time: '18:00',
    price: 7,
    capacity: 70,
  },
  {
    cinema_id: 1,
    movie_id: '1ee1cb09-37b8-429a-8912-c50f144495ca',
    room_number: 3,
    screening_date: '2020-01-02',
    screening_time: '21:00',
    price: 7,
    capacity: 70,
  },
  {
    cinema_id: 2,
    movie_id: '5aa7b461-c3ab-4c7b-b875-f77ead576309',
    room_number: 2,
    screening_date: '2020-01-15',
    screening_time: '18:00',
    price: 10,
    capacity: 95,
  },
  {
    cinema_id: 2,
    movie_id: '5aa7b461-c3ab-4c7b-b875-f77ead576309',
    room_number: 2,
    screening_date: '2020-01-15',
    screening_time: '21:00',
    price: 10,
    capacity: 95,
  },
]

exports.seed = async knex => {
  await knex('schedules').del();
  await knex('schedules').insert(schedules);
  await knex('screenings').insert(screenings);
}