const Drone = require('../models/drone.model');

// Iteration 2

module.exports.index = (req, res, next) => {
  Drone.find({})
  .then(drones => {
    console.log('holi');
    res.render('drones/index', {
      drones: drones
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('drones/new', {
    drone: new Drone()
  });
};

module.exports.create = (req, res, next) => {
  const droneData = req.body;

  const newDrone = new Drone(droneData);

  newDrone.save().then((drone) => {
    res.redirect('/drones');
  });
};
