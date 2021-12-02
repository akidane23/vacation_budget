var models  = require('../../models');
var express = require('express');
var router  = express.Router();
var users = require('./users.js');
var trips = require('./trips.js');
var userTrips = require('./userTrips.js');



router.use('/users', users);
router.use('/trips', trips);
router.use('/userTrips', userTrips);


module.exports = router;