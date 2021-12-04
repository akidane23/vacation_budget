const { User } = require('../models');

const UserData = [
  {
    username: 'cartrell',
    password: "cartrell",
    email: "cartrell@cartrell.com",
  },
  {
    username: 'arsema',
    password: "arsema",
    email: "arsema@arsema.com",
  },
  {
    username: 'owen',
    password: "owen",
    email: "owen@owen.com",
  },
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;
