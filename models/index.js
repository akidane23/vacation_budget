<<<<<<< HEAD
const Trip = require("./Trip");
const User = require("./User");
const UserTrip = require("./UserTrip");
=======


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

// const Trip = require("./Trip");
// const User = require("./User");
// const UserTrip = require("./UserTrip");
>>>>>>> baa7707bfe1710fdbb03529aaa87ff2c97b95943

User.belongsToMany(Trip, {
    through: UserTrip,
    as: "trip",
    foreign_key: "user_id"
})

<<<<<<< HEAD
Trip.belongsToMany(User, {
    through: UserTrip,
    as: "user",
    foreign_key: "trip_id"
})

module.exports = {
    User, Trip, UserTrip
}
=======

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

// Trip.belongsToMany(User, {
//     through: UserTrip,
//     as: "user",
//     foreign_key: "trip_id"
// })

// module.exports = {
//     User, Trip, UserTrip
// }

>>>>>>> baa7707bfe1710fdbb03529aaa87ff2c97b95943

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
