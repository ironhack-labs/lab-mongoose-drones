const express = require('express');

const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
      if (err) {
        next(err);
      } else {
        res.render('drones/index', { drones } );
      }
    })
});


router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  const newDrone = new Drone( droneInfo );
  newDrone.save( (err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/drones');
    }
  })
});

module.exports = router;
