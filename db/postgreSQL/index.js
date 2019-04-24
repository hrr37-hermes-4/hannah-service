const config = require('../../knexfile.js');
const env = process.env.NODE_ENV || 'development';
// CONNECT TO POSTGRESQL DB
const knex = require('knex')(config[env]);
/* ***** POSTGRESQL HELPER FUNCTIONS ***** */

const getReviews = (id) => {

}

