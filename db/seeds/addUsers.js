const generate = require('../generate.js');

exports.seed = async (knex) => {
  const userData = generate.generateManyUsers();
  console.log('users generated', userData.length);
  await knex('users').truncate();
  await knex.batchInsert('users', userData);
};
