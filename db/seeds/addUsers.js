const generate = require('../generate.js');

exports.seed = async (knex, Promise) => {
  const userData = generate.generateManyUsers();
  console.log('users generated', userData.length);
  await knex.batchInsert('users', userData.slice(0, 10000), 10000);
};
