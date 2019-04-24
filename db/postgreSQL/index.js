const config = require('../../knexfile.js');
const env = process.env.NODE_ENV || 'development';
// CONNECT TO POSTGRESQL DB
const knex = require('knex')(config[env]);

/* ***** POSTGRESQL HELPER FUNCTIONS ***** */
const getReviews = async(id) => {
  try {
    await knex.select()
      .from('reviews')
      .where({ book_id: id })
      .then(reviews =>{
        console.log(reviews);
        return reviews;
      });
  }
  catch(err) {
    throw err;
  }
};

const getRatedReviews = async(id, rating) => {
  try {
    let result = await knex.select()
      .from('reviews')
      .where({ book_id: id })
      .andWhere({ rating: rating });
    console.log(result);
    return result;
  }
  catch(err) {
    throw err;
  }
};



/* TESTING RESULTS IN CONSOLE */
// getReviews(439);
// getRatedReviews(94, 3);