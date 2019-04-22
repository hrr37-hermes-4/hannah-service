const User = {
  fields: {
    user_id: {
      type: 'uuid',
      default: {'$db_function': 'uuid()'}
    },
    username: 'varchar',
    avatar: 'varchar',
  },
  key: ['user_id']
};

module.exports = User;