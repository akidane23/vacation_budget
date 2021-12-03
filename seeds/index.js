const seedUsers = require('./user-seeds');
const seedTrips = require('./trip-seeds');
const seedUserTrips = require('./user-trip-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedTrips();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUserTrips();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
