
const Review = {
  fields: {
    id: {
      type: 'uuid',
      default: {'$db_function': 'uuid()'}
    },
    user_id: 'int',
    book_id: 'int',
    date: 'varchar',
    review: 'varchar',
    rating: 'int',
    likes: {'type': 'int', 'default': '0'}
  },
  key: ['id']
};

module.exports = Review;