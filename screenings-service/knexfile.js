module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5435,
        database: process.env.DB_NAME || 'screenings_service',
        user:     process.env.DB_USER || 'screenings_user',
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