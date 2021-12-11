const Trip = require("./Trip");
const User = require("./user");
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

