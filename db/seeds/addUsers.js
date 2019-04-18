const generate = require('../generate.js');

exports.seed = async (knex, Promise) => {
  const userData = generate.generateManyUsers();
  await knex('users')
    .insert(userData);
};
