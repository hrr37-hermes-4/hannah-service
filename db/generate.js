// DATA GENERATOR FILE
const faker = require('faker');
const fs = require('fs');
const csv = require('fast-csv');
const csvWriter = require('csv-write-stream');
var writer = csvWriter( {headers: ["user_id", "book_id", "date", "review", "rating"]});

// create a fake user
const createFakeUser = () => ({
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
});
// create a fake review
const createFakeReview = () => ({
  user_id: faker.random.number({ 'min': 1, 'max': 10000000 }),
  book_id: faker.random.number({ 'min': 1, 'max': 10000000 }),
  date: `${faker.date.month()} ${faker.random.number({ 'min': 1, 'max': 30 })}, ${(Math.floor(Math.random() * (2019 - 1996)) + 1996)}`,
  review: faker.lorem.paragraphs(),
  rating: faker.random.number({ min: 1, max: 5 }),
});

const generateManyUsers = () => {
  const users = [];
  const desiredNumber = 10000000;
  for (let i = 0; i < desiredNumber; i++) {
    users.push(createFakeUser());
  }
  return users;
};

// **** NO NEED FOR THIS FUNCTION AS OF NOW ****
// const generateManyReviews = () => {
//   const reviews = [];
//   const desiredNumber = 10000;
//   for (let i = 0; i < desiredNumber; i++) {
//     reviews.push(createFakeReview());
//   }
//   return reviews;
// };
//
// const user_id = faker.random.number({ 'min': 1, 'max': 10000000 });
//     const book_id = faker.random.number({ 'min': 1, 'max': 10000000 });
//     const date = `${faker.date.month()} ${faker.random.number({ 'min': 1, 'max': 30 })}, ${(Math.floor(Math.random() * (2019 - 1996)) + 1996)}`;
//     const review = faker.lorem.paragraphs();
//     const rating = faker.random.number({ min: 1, max: 5 });

const generateCSV = () => {
  
  

  console.time('csv time');
  let count = 0;
  writer.pipe(fs.createWriteStream('data.csv'));
  
  for (let i = 0; i < 20000000; i++) {
    const user_id = faker.random.number({ 'min': 1, 'max': 10000000 });
    const book_id = faker.random.number({ 'min': 1, 'max': 10000000 });
    const date = `${faker.date.month()} ${faker.random.number({ 'min': 1, 'max': 30 })}, ${(Math.floor(Math.random() * (2019 - 1996)) + 1996)}`;
    const review = faker.lorem.paragraphs();
    const rating = faker.random.number({ min: 1, max: 5 });
    writer.write(
      user_id,
      book_id,
      date,
      review,
      rating
    )
   
  }
  
  
  console.timeEnd('csv time');
  writer.end();
  
};
generateCSV();

module.exports = {
  createFakeUser: createFakeUser,
  createFakeReview: createFakeReview,
  generateManyUsers: generateManyUsers
};

