const Drone = require ('../models/drone.js');

module.exports.index = (req, res, next) =>{
  Drone.find({}).then((drone) =>{
    res.render('drones/index', {
      drone: drone
    });
  });
};
