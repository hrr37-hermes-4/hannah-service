const generate = require('../generate.js');
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');

exports.seed = async (knex) => {

  console.log('Beginning review data seed...');
  console.time('seed review time');
  // query to be used to copy CSV file into table
  const query = `COPY reviews(user_id, book_id, date, review, rating) FROM '/Users/briankwon/Desktop/hr-immersive/SDC/sdc-brian/reviews.csv' DELIMITER ',' CSV HEADER`;
  let count = 0;
  // function that deletes csv each iteration to avoid memory error
  const deleteCSV = () => {
    fs.unlink('/Users/briankwon/Desktop/hr-immersive/SDC/sdc-brian/reviews.csv', err => {
      if (err) {console.log(err)};
    })
  };
  // count increment function
  const inc = () => { count++; };
  fs.createWriteStream('/Users/briankwon/Desktop/hr-immersive/SDC/sdc-brian/reviews.csv');
  // truncate will empty the table if filled
  knex.truncate('reviews');
  // function that will seed db
  const seedDB = async() => {
    while (count < 50) {
      let fakeReviews = [];
      for (let i = 0; i < 1000000; i++) {
        fakeReviews.push(generate.createFakeReview());
      }

      await new ObjectsToCsv(fakeReviews).toDisk('/Users/briankwon/Desktop/hr-immersive/SDC/sdc-brian/reviews.csv');
      await knex.raw(query);
      await deleteCSV();
      await inc();
    }
  }

  await seedDB();
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




