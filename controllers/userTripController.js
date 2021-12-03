const db = require('../models');

module.exports = {

  findAll: function(req, res) {
    db
      .UserTrip
      .findAll({})
      .then(function(result){
        res.json(result)
        })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  associate: function (req, res) {
    db
      .UserTrip
      .create(req.body)
      .then(function(result){
         res.json(result)
         })
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  },
  delete:function(req, res) {
    db
    .Trip
    .destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  },
  create: function(req, res) {
    db
    .Trip
    .create({
        name: req.body.name
      })
      
      .then(function(result) {
        res.json(result);
      });
 
  
  }

}