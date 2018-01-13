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

module.exports.edit = (req, res, next) => {
  Drone.findById(req.params.id).then((drone) => {
    res.render('drones/new', {
      drone: drone
    });
  });
};

module.exports.update = (req, res, next) => {
  const droneId = req.params.id;
  const updates = {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
  };

  Drone.findByIdAndUpdate(droneId, updates).then((drone) => {
    res.redirect('/drones');
  });
};

module.exports.delete = (req, res, next) => {
  const droneId = req.params.id;

  Drone.findByIdAndRemove(droneId).then((drone) => {
    return res.redirect('/drones');
  });
};
