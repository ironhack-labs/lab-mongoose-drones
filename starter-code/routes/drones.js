const express = require('express');
const Drone = require(`../models/drone`);

// require the Drone model here

const router = express.Router();

router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }

    console.log(drones);
    res.render(`drones/index`, {
      drones: drones
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render(`drones/new`)
});

router.post('/', (req, res, next) => {
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  const newDrone = new Drone(droneInfo);

  newDrone.save((err) => {
    if (err) { return next(err) }

    return res.redirect(`/`);
  });
});

module.exports = router;
