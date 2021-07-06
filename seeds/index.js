const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const sequelize = require("../config/connection");

async function seed () {
  await sequelize.sync({ force: true });
  const users = await seedUsers();
  
  await seedPosts();
  process.exit(0);
};

seed();