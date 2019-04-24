const generator = require('../../generate.js');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

/* ***** HELPER METHODS ***** */


/***** CSV GENERATOR *****/
const generateReviewsCSV = () => {
  console.time('timing');
  let count = 0;
  console.log('Starting review csv generation');
  writer.pipe(fs.createWriteStream(__dirname + `/csv/reviews.csv`));
  for (let i = 0; i < 12000000; i++) {
    let review = generator.createFakeReview();
    writer.write({
      id: count++,
      book_id: review.book_id,
      user_id: review.user_id,
      date: review.date,
      review: review.review,
      rating: review.rating
    })
  }
  writer.end();
  console.timeEnd('timing');
}



generateReviewsCSV();