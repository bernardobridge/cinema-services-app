exports.up = async knex => await knex.schema
    .createTable('schedules', table => {
        table.uuid('schedule_id').defaultTo(knex.raw('uuid_generate_v4()'));
        table.integer('cinema_id');
        table.uuid('movie_id');
        table.date('start_date');
        table.date('end_date');
        table.primary(['cinema_id', 'movie_id'])
    })
    .createTable('screenings', table => {
        table.uuid('slot_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.integer('cinema_id');
        table.uuid('movie_id');
        table.integer('room_number');
        table.date('screening_date');
        table.string('screening_time');
        table.integer('price');
        table.integer('capacity');
        table.foreign(['cinema_id', 'movie_id']).references(['cinema_id', 'movie_id']).inTable('schedules').onDelete('CASCADE');
    });

exports.down = async knex => await knex.schema
    .dropTable('screenings')
    .dropTable('schedules');