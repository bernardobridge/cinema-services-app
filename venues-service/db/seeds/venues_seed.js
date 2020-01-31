const venues = [
  {
    cinema_id: 1,
    cinema_name: 'Royal Cinema - Leicester Square',
    city: 'London',
    is_deluxe: true,
  },
  {
    cinema_id: 2,
    cinema_name: 'Royal Cinema - Westfield Stratford',
    city: 'London',
    is_deluxe: false,
  },
  {
    cinema_id: 3,
    cinema_name: 'Royal Cinema - Richmond',
    city: 'London',
    is_deluxe: false,
  },
  {
    cinema_id: 4,
    cinema_name: 'Royal Cinema - Winchester',
    city: 'Winchester',
    is_deluxe: false,
  },
  {
    cinema_id: 5,
    cinema_name: 'Royal Cinema - Southville',
    city: 'Bristol',
    is_deluxe: true,
  },
]

exports.seed = async knex => {
  await knex('venues').del();
  await knex('venues').insert(venues);
}