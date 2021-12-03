const { User } = require('../models');

const UserData = [
  {
    username: 'cartrell',
    password: "cartrell",
    email: "cartrell@cartrell.com",
    password: "cartrell",
  },
  {
    username: 'arsema',
    password: "arsema",
    email: "arsema@arsema.com",
    password: "arsema",
  },
  {
    username: 'owen',
    password: "owen",
    email: "owen@owen.com",
    password: "owen",
  },
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;
