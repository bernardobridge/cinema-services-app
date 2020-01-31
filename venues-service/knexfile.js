module.exports = {
    development: {
        client: 'pg',
        connection: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5434,
        database: process.env.DB_NAME || 'venues_service',
        user:     process.env.DB_USER || 'venues_user',
        password: process.env.DB_PASSWORD || 'pwd12345',
        },
        migrations: {
        directory: __dirname + '/db/migrations'
        },
        seeds: {
        directory: __dirname + '/db/seeds'
        }
    },
};
