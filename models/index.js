const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments')

// A User has many Posts
Users.hasMany(Posts, { foreignKey: 'user_id' });

// A Post belongs to a User
Posts.belongsTo(Users, { foreignKey: 'user_id' });

// A User has many Comments
Users.hasMany(Comments, { 
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// A Comment belongs to a User
Comments.belongsTo(Users, { foreignKey: 'user_id' });

// A Post has many Comments
Posts.hasMany(Comments, { 
  foreignKey: 'post_id', 
  onDelete: "CASCADE"
});

// A Comment belongs to a Post
Comments.belongsTo(Posts, { foreignKey: 'post_id' });

module.exports = { Users, Posts, Comments };


