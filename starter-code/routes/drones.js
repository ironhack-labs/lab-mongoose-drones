const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();

router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) throw next(err);
    res.render('drones/index', { drones });
  });
});

router.post('/', (req, res, next) => {
  const droneData = {
    name: req.body.name,
    propellers: req.body.propeller,
    maxSpeed: req.body.maxSpeed,
  };
  const newDrone = new Drone(droneData);
  newDrone.save(err => {
    next(err);
  });
  res.redirect('/drones');
});

router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

module.exports = router;
