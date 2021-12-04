const Trip = require("./Trip");
const User = require("./User");
const UserTrip = require("./UserTrip");

User.belongsToMany(Trip, {
    through: UserTrip,
    as: "trip",
    foreign_key: "user_id"
})

Trip.belongsToMany(User, {
    through: UserTrip,
    as: "user",
    foreign_key: "trip_id"
})

module.exports = {
    User, Trip, UserTrip
}

// const models  = require('../../models');
// const express = require('express');
// const router  = express.Router();
// const users = require('./users.js');
// const trip = require('./trip.js');
// const userTrip = require('./usertrip.js');


// Trip.hasMany(User, {
//   foreignKey: 'Trip_id',
// });


// router.use('/users', users);
// router.use('/trip', trip);
// router.use('/usetrip', usertrip);



// module.exports = router;
