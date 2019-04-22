const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/reviews',
    migrations: {
      directory: path.join(__dirname, 'db/postgreSQL/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db/postgreSQL/seeds'),
    },
  },
};







