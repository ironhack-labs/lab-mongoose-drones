const express = require('express');
const Drone = require('../models/drone');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {

  Drone.find({}, (error, result) => {
      if (error) {
        next(error);
      } else {
        res.render('drones', {res: result});
      }
    });
});

router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});


router.post('/drones', (req, res, next) => {

  const droneInfo = {
    droneName: req.body.droneName,
    propeller: req.body.propeller,
    maxSpeed: req.body.maxSpeed
  };

  const newDrone = new Drone(droneInfo);

  newDrone.save((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/drones');
  });
});

module.exports = router;
