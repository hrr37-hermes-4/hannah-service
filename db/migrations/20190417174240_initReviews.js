
exports.up = function(knex, Promise) {
  await knex.schema.createTable('reviews', (table) => {
    table
      
  });
};

exports.down = function(knex, Promise) {

};
