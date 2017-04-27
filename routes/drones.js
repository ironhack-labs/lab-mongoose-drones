const express = require('express');

const Drone = require('../models/drone');

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {
      next(err);
    }
    res.render('./drones', { drones });
  });
});


router.get('/new', (req, res, next) => {
  res.render('./drones/new');
});

router.post('/', (req, res, next) => {
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  console.log(droneInfo);

  const newDrone = new Drone(droneInfo);

  newDrone.save((err) => {
    if (err) {
      next(err);
    }
    res.redirect('/drones');
  });
});

module.exports = router;
