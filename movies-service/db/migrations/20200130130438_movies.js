exports.up = async knex => await knex.schema
    .createTable('movies', table => {
        table.uuid('movie_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('movie_title');
        table.integer('title_year');
        table.string('genre');
        table.integer('duration');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    });

exports.down = async knex => await knex.schema.dropTable('movies');