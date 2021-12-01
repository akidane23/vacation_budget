//BELOW THE CORRECT RELATIONSHIPS STILL NEED TO BE MADE BUT THE NAMING AND SUCH 
//FOR THE ID'S IS ALL RIGHT HERE TO GIVE US A GOOD START
// import models
const User = require('./User');
const Tag = require('./Tag');
const UserTag = require('./UserTag');

User.belongsTo(Category, {
  foreignKey: 'user_id',
});

User.belongsToMany(Tag, {
  through: UserTag,
  foreignKey: 'user_id',
});

Tag.belongsToMany(User, {
  through: UserTag,
  foreignKey: 'trip_id',
});

module.exports = {
  User,
  Tag,
  UserTag,
};