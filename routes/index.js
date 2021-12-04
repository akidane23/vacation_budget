const express = require("express");
const { User, Trip, UserTrip } = require("../models");
const router = express.Router();

// var users = require('./users.js');
// var vacationOptions = require('./vacationOptions.js');

async function getTrips(user_id, allTrips) {
  const myTrips = [];
  let mTiDs = await UserTrip.findAll({ where: { user_id } });
  if (mTiDs) {
    mTiDs = mTiDs.map((mT) => mT.dataValues.trip_id);
        allTrips.forEach(t => {
        if (mTiDs.includes(t.id)) {
            myTrips.push(t)
        }
    })
  }
  return myTrips;
}

router.get("/", (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
      return res.redirect("/trips");
    } else {
      return res.render("home", {
        loggedIn: false,
      });
    }
  });

router.post("/user/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) return res.redirect("/"); // THIS MUST BE HANDLED DIFFERENTLY
  if (user.dataValues.password === password) {
    req.session.loggedIn = true;
    req.session.username = username;
    req.session.userId = user.dataValues.id;
    return res.redirect("/trips");
  } else {
    return res.redirect("/");
  }
});

router.post("/user/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, email } });
    if (!user) {
      const newUser = await User.create({ username, email, password });
      console.log(newUser.dataValues);
      return res.redirect("/");
    }
    res.redirect("/");
  } catch (error) {
    res.status(500);
  }

  if (user.dataValues.password === password) {
    req.session.loggedIn = true;
    req.session.username = username;
    req.session.userId = user.dataValues.id;
    return res.redirect("/");
  } else {
    return res.redirect("/");
  }
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {});
    res.redirect("/");
  });

router.get("/trips", async (req, res) => {

  if (!req.session.loggedIn) {
    return res.redirect("/");
  }
  const trips = await Trip.findAll({});
  const tData = trips.map((t) => t.dataValues);
  const myTrips = await getTrips(req.session.userId, tData);
  res.render("trips", {
    username: req.session.username,
    trips: tData,
    hasTrips: myTrips.length > 0 ? true : false,
    myTrips: myTrips.length > 0 ? myTrips : []
  });
});

router.post("/api/add-trip", async (req, res) => {
    const trip_id = parseInt(req.body.trip_id);
    const user_id = req.session.userId;
    await UserTrip.create({user_id,trip_id})
    return res.redirect('/trips')
})


module.exports = router;
