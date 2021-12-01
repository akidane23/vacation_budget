const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    // DECIDE WHAT ATTRIBUTES A USER HAS, INCLUDING PROTECTED LOGIN INFO
  },
  {
    sequelize
  }
);

module.exports = Post;