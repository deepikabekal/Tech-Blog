const sequelize = require("../config/connection");
const {User} = require("../models");

const userdata = [
  {
    username: "test",
    email: "test@test.com",
    password: "test123",
  },
];

const seedUsers = () => {
   return User.bulkCreate(userdata, { individualHooks: true });
}

module.exports = seedUsers;