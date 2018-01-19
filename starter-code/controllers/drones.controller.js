const Drone = require('../models/drone.model');

module.exports.show = (req, res, next) => {
  Drone.find({}).then((drone) => {
    // console.log(drone);
    res.render('./drones/index', {
      drones: drone
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('./drones/new');
};

module.exports.create = (req, res, next) => {
  const droneData =req.body;
  // console.log(droneData);
  const newDrone = new Drone(droneData);

  newDrone.save().then((drone)=>{
    res.redirect('/drones');
  })
};

module.exports.delete = (req, res, next) => {
  const droneId = req.params.id;

  Drone.findByIdAndRemove(droneId).then((drone) => {
    return res.redirect('/drones');
  });
};