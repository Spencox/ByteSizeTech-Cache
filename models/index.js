const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments')

// Each post has one user author
Posts.belongsTo(Users, {
  foreignKey: 'user_id'
});

// Each post can have many comments
Posts.hasMany(Comments, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Each user can have many comments
Users.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

module.exports = { Users, Posts, Comments };
