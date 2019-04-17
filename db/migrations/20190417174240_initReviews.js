
exports.up = async (knex, Promise) => {
  await knex.schema.createTable('reviews', (table) => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table
      .integer('user_id').notNullable();
    table
      .integer('book_id').notNullable();
    table
      .string('date').notNullable();
    table
      .string('review').notNullable();
    table
      .integer('rating').notNullable();
    table
      .integer('likes').defaultTo(0);
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable('users');
};
