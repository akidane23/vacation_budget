var db = require("../../models");
var express = require('express');
var router  = express.Router();


router.post("/user/login", async (req, res) => {
    console.log(req.body)
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(403).json({message: "invalid"});
  if (user.dataValues.password !== password) {
      console.log("not valid")
    return res.status(403).json({message: "invalid"});
  }
  req.session.loggedIn = true;
    req.session.username = username;
    req.session.userId = user.dataValues.id;
    return res.status(200).json({message: "success"});
});