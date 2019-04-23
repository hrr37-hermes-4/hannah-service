const generator = require('../../generate.js');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

const deleteCSV = () => {
  fs.unlink(__dirname + '/csv/reviews.csv', err => {
    if (err) {console.log(err)} else {console.log('Deleted')};
  })
};

const generateReviewsCSV = async() => {
  console.log('Starting review csv generation');
  console.time('timing');
  let count = 0;
  callCount !== 0 ? deleteCSV() : null;

  await writer.pipe(fs.createWriteStream(__dirname + `/csv/reviews.csv`));
  for (let i = startValue; i < startValue + 10000000; i++) {
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

  callCount++;
  writer.end();
  console.timeEnd('timing');
}

generateReviewsCSV();