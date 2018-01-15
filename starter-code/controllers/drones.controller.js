const Drone = require('../models/drone');

module.exports.index = (req, res, next) => {
  Drone.find({}).then((drones) => {
    res.render('drones/index', {
      drones: drones
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('drones/form', {
    drone: new Drone()
  });
};

module.exports.create = (req, res, next) => {
  const droneData = req.body;
  const newDrone = new Drone(droneData);
  newDrone.save().then((drone) => {
    res.redirect('/drones');
  })
};

module.exports.edit = (req, res, next) => {
  Drone.findById(req.params.id).then((drone) => {
    res.render('drones/form', {
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
console.log(droneId)
  Drone.findByIdAndUpdate(droneId, updates).then((drone) => {
    console.log(drone)
    res.redirect('/drones');
  });
};

module.exports.delete = (req, res, next) => {
  const droneId = req.params.id;

  Drone.findByIdAndRemove(droneId).then((drone) => {
    return res.redirect('/drones');
  });
};

// module.exports.show = (req, res, next) => {
//   Product.findById(req.params.id).then((product) => {
//     res.render('products/show', {
//       product: product
//     });
//   });
// };



