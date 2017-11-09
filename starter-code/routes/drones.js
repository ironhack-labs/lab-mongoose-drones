const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {return next(err);}
    res.render('drones/index', {drones: drones});
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  let droneInfo = {
    droneName: req.body._droneName,
    propellers: req.body._propellers,
    maxSpeed: req.body._maxSpeed};

  const newDrone = new Drone(droneInfo);

  newDrone.save( (err) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log('drone added');
      return res.redirect('/drones');
    }
  });

});

module.exports = router;
