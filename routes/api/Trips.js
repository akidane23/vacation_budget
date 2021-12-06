var db = require("../../models");
var express = require('express');
var router  = express.Router();



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