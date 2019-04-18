const generate = require('../generate.js');

exports.seed = async (knex, Promise) => {
  const userData = generate.generateManyUsers();
  for (let i = 0; i < userData.length; i++) {
    
  }
  console.log('users generated', userData.length);
  await knex.batchInsert('users', userData, 10000000);
};
