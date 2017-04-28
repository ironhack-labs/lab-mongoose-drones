const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find((err, dronesList) => {
    if (err) {
      next(err);
      return;
    }

    res.render('./drones/index.ejs', {
      drones: dronesList
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs');
});

router.post('/drones/new', (req, res, next) => {
  // Iteration #3
  const newDrone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
    imageUrl: req.body.imageUrl
  });
  newDrone.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/drones');
  });
});

module.exports = router;
