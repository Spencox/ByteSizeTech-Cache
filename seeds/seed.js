const sequelize = require('../config/connection');
const { Users, Posts, Comments } = require('../models');

const userData = require('./usersData.json');
const postData = require('./postsData.json');
const commentData = require('./commentData.json');


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

  const comments = await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true
  });

  process.exit(0);
};

seedDatabase();
