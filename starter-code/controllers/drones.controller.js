const Drone = require('../models/drone.model');

module.exports.show = (req, res, next) => {
  Drone.find({}).then((drone) => {
    // console.log(drone);
    res.render('./drones/index', {
      drones: drone
    });
  });
};