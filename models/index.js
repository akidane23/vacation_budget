const models  = require('../../models');
const express = require('express');
const router  = express.Router();
const users = require('./users.js');
const trip = require('./trip.js');
const userTrip = require('./usertrip.js');


Trip.hasMany(User, {
  foreignKey: 'Trip_id',
});


router.use('/users', users);
router.use('/trip', trip);
router.use('/usetrip', usertrip);



module.exports = router;