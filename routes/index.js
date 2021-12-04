
const express = require("express")
const { User, Trip } = require("../models")
const router = express.Router();

// var users = require('./users.js');
// var vacationOptions = require('./vacationOptions.js');

router.post('/user/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({where: {username}})
    if (!user) res.send("you fucked up")
    if (user.dataValues.password === password) {
        req.session.loggedIn = true;
        req.session.user = username;
        return res.redirect("/")
    }
    else {
        req.session.loggedIn = false;
        req.session.user = null;
        return res.redirect("/")
    }
})

router.get("/", (req, res) => {
    if (req.session.loggedIn) {
        return res.render("home", {
            loggedIn: true,
            user: req.session.user
        });
    }
    else {
        return res.render("home", {
            loggedin: false
        })
    }
    
})

router.get("/trips", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect("/")
    }
    const trips = await Trip.findAll({});
    const tData = trips.map(t => t.dataValues);
    res.render("trips", {
        user: req.session.user,
        trips: tData
    })
})

router.get("/logout", (req, res) => {
    req.session.destroy(err => {})
    res.redirect("/")
})

module.exports = router;