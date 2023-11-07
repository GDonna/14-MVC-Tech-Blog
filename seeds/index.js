const sequelize = require('../config/connection');
const seedPosts = require('./BlogData');


const seedAll = async () => {
  await sequelize.sync({force: true});
  await seedPosts();

  process.exit(0);
};

seedAll();
