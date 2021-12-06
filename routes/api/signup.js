var db = require("../../models");
var express = require('express');
var router  = express.Router();


router.post("/user/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = await User.findOne({ where: { username, email } });
      if (user) return res.status(403).json({message: "exists"})
      const newUser = await User.create({ username, email, password });
      console.log(newUser.dataValues);
      return res.status(200).json({message:"success"})
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