var db = require("../../models");
var express = require('express');
var router  = express.Router();


router.get("/logout", (req, res) => {
    req.session.destroy((err) => {});
    res.redirect("/");
  });