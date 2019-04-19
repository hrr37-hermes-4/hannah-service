const generate = require('../generate.js');

exports.seed = async (knex) => {
  console.time('timing users seeding');
  const userData = generate.generateManyUsers();
  console.log('users generated', userData.length);
  await knex('users').truncate();
  await knex.batchInsert('users', userData);
  console.timeEnd('timing users seeding');
};
