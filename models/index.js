
// import models
const User = require('./User');
const Trip = require('./Trip');
const UserTrip = require('./UserTrip');
const models  = require('../../models');
const express = require('express');
const router  = express.Router();
const users = require('./users.js');
const trip = require('./trip.js');
const userTrip = require('./usertrip.js');


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

router.use('/users', users);
router.use('/trip', trip);
router.use('/usetrip', usertrip);



module.exports = router;