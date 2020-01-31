exports.up = async knex => await knex.schema
    .createTable('venues', table => {
        table.increments('cinema_id');
        table.string('cinema_name');
        table.string('city');
        table.boolean('is_deluxe');
    });

exports.down = async knex => await knex.schema.dropTable('venues');