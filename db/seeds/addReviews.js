
exports.seed = async (knex) => {
  console.log('Beginning seed');
  console.time('seed review time');
  const query = `COPY reviews(user_id, book_id, date, review, rating) FROM '/Users/briankwon/Desktop/hr-immersive/SDC/sdc-brian/data.csv' DELIMITER ',' CSV HEADER`;
  
  knex.truncate('reviews');
  await knex.raw(query);
  await console.timeEnd('seed review time');
};



/* seed without csv

console.time('timing reviews seeding');
  // declare count
  let count = 0;
  const incrementCount = () => { count += 1; };
  // empty table if filled from previous seed
  await knex('reviews').truncate()
    .then(async () => {
      console.log('starting seed');
      // generate reviews one at a time instead of bulk generation
      while (count <= 2000) {
        const fakeReviews = [];
        // iterate up to desiredAmount each time
        for (let i = 0; i < 10000; i++) {
          fakeReviews.push(generate.createFakeReview());
        }
        // increment count via function to utilize await
        await incrementCount();
        await knex('reviews').insert(fakeReviews);
      }

      console.timeEnd('timing reviews seeding');
    });




*/




