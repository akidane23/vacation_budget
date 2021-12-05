const { Trip } = require('../models');

const TripData = [
  {
    title: "beach",
    location: "bahamas",
    // date: "December 15 to December 19, 2022",
    // includes: "4 Nights/ 5 Days. Food and Drink",
    // price: "$2,550"npm 
  },
  {
    title: "city",
    location: "new york",
    // date: "December 15 to December 19, 2022",
    // includes: "4 Nights/ 5 Days. Food and Drink",
    // price: "$2,550"
  },
  {
    title: "woods",
    location: "the woods",
    // date: "December 15 to December 19, 2022",
    // includes: "4 Nights/ 5 Days. Food and Drink",
    // price: "$2,550"
  },
];

const seedTrips = () => Trip.bulkCreate(TripData);

module.exports = seedTrips;
