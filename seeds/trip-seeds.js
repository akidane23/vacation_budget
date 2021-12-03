const { Trip } = require('../models');

const TripData = [
  {
    title: "beach",
    location: "bahamas"
  },
  {
    title: "city",
    location: "new york"
  },
  {
    title: "woods",
    location: "the woods"
  },
];

const seedTrips = () => Trip.bulkCreate(TripData);

module.exports = seedTrips;
