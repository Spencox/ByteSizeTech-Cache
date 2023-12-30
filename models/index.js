const Posts = require('./Posts');
// const FollowedRepos = require('./FollowedRepos');
// const Repos = require('./Repos');
const Users = require('./Users');

// Each post has one user author
Posts.belongsTo(Users, {
  foreignKey: 'user_id'
});

// // 
// Repos.hasMany(Bugs, {
//   foreignKey: 'repo_id'
// });

// // FollowedRepos belongs to Users
// Repos.belongsToMany(Users, {
//   through: FollowedRepos
// });

// Users.belongsToMany(Repos, {
//   through: FollowedRepos
// });

module.exports = { Users, Posts };
