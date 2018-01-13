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
