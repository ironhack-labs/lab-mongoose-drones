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

module.exports.edit = (req, res, next) => {
   Drone.findById(req.params.id).then((drone) => {
     res.render('drones/edit', {drone});
   });
};

module.exports.update = (req, res, next) => {
   const droneId = req.params.id;
   // req.body.hola
   const {droneName, propellers, maxSpeed} = req.body;
   const updates = {droneName, propellers, maxSpeed};

   Drone.findByIdAndUpdate(droneId, updates).then((drone) => {
     res.redirect('/drones');
   });
};

module.exports.delete = (req, res, next) => {
   const droneId = req.params.id;
   console.log(droneId);

   Drone.findByIdAndRemove(droneId).then((drone) => {
     return res.redirect('/drones');
   });
};
