const generate = require('../generate.js');

exports.seed = async (knex) => {
  console.time('timing reviews seeding');
  // declare count
  let count = 0;
  // empty table if filled from previous seed
  await knex('reviews').truncate();
  // create a function to increment the count
  const incrementCount = () => {
    count += 1;
  };
  console.log('starting seed');
  // generate reviews one at a time instead of bulk generation
  while (count <= 2000) {
    const fakeReviews = [];
    const desiredAmount = 10000;
    // iterate up to desiredAmount each time
    for (let i = 0; i < desiredAmount; i++) {
      fakeReviews.push(generate.createFakeReview());
    }
    await knex.batchInsert('reviews', fakeReviews);
    // increment count via function to utilize await
    await incrementCount();
  }
  console.timeEnd('timing reviews seeding');
};
