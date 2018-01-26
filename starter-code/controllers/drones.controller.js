const Drone = require('../models/drone.model');

module.exports.index = (req, res, next) => {
  Drone.find({})
    .then((drones) => {
      res.render('drones/index', {
        drones: drones
      });
  });
};

module.exports.new = (req, res, next) => {
  res.render('drones/new');
};

module.exports.create = (req, res, next) => {
  new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
    image: req.body.image
  }).save()
    .then((drone) => {
      return res.redirect('/drones');
    });
};
