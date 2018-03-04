const express = require('express');

// require the Drone model here
const Drones = require('../models/drones');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drones.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  const newDrone = new Drones(droneInfo);
  newDrone.save( (err) => {
    if (err) { return next(err) }
    res.render('drones/new');
  });
});

module.exports = router;
