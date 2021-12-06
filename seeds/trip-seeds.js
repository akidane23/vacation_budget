const { Trip } = require('../models');

const TripData = [
  {
    title: "Sun Island All Inclusive Resort",
    location: "Maldives",
    date: "December 15 to December 19, 2022",
    includes: "4 Nights/ 5 Days. Food and Drink",
    price: "$2,550"
  },
  {
    title: "Donner MemorialState Park",
    location: "California",
    date: "July 24 to July 30, 2022",
    includes: "4 Nights/ 5 Days. Food and Drink",
    price: "$2,550"
  },
  {
    title: "Masai Mara Safari",
    location: "Nairobi, Kenya",
    date: "September 19 to September 25, 2022",
    includes: "6 Nights/ 7 Days. Food and Drink",
    price: "$3,720"
  },
];

const seedTrips = () => Trip.bulkCreate(TripData);

module.exports = seedTrips;
