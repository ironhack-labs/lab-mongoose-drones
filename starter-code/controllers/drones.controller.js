const Drone = require('../models/drone.model');

module.exports.index = (req, res, next) => {
  Drone.find({}).then((drones) => {
    res.render('drones/index', {
      drones: drones
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('drones/new', {
    drones: new Drone()
  });
};

module.exports.create = (req, res, next) => {
  const droneData = req.body;

  const newDrone = new Drone(droneData);

  newDrone.save().then((drone) => {
    res.redirect('/drones');
  })
};
//
// module.exports.show = (req, res, next) => {
//   drone.findById(req.params.id).then((drone) => {
//     res.render('drones/show', {
//       drone: drone
//     });
//   });
// };


module.exports.edit = (req, res, next) => {
  Drone.findById(req.params.id).then((drone) => {
    res.render('drones/new', {
      drones: drone
    });
  });
};

module.exports.update = (req, res, next) => {
  const droneId = req.params.id;
  const updates = {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
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
