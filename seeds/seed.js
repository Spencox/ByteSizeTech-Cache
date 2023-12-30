const sequelize = require('../config/connection');
const { Users, Posts } = require('../models');

const userData = require('./usersData.json');
const postData = require('./postsData.json');
// const followedReposData = require('./followedReposData.json');
// const reposData = require('./reposData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Posts.bulkCreate(postData, {
    individualHooks: true,
    returning: true
  });

//   const followedRepos = await FollowedRepos.bulkCreate(followedReposData, {
//     individualHooks: true,
//     returning: true
//   });

//   const bugs = await Bugs.bulkCreate(bugsData, {
//     individualHooks: true,
//     returning: true
//   });

  process.exit(0);
};

seedDatabase();
