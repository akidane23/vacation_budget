
// import models
const User = require('./User');
const Trip = require('./Trip');
const UserTrip = require('./UserTrip');

User.hasMany(Trip, {
  foreignKey: 'User_id',
});

UserTrip.belongsTo(User, {
    foreginKey: 'User_id',
    onDelete: 'cascade',
});

Trip.hasMany(User, {
  through: 'UserTrip',
  foreignKey: 'user',
});

module.exports = {
  User,
  Tag,
  UserTag,
};