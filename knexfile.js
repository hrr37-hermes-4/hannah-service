const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/reviews',
    migrations: {
      directory: path.join(__dirname, 'db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db/seeds'),
    },
  },
};
