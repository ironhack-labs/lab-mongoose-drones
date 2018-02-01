'use strict';

const express = require('express');

// require the Drone model here

const router = express.Router();

const Drone = require('../models/drone');

router.get('/', (req, res, next) => {
  // Iteration #2

  Drone.find({}, (err, drones) => {
    if (err) {
      return next(err);
    }
    res.render('./drones/index', {
      drones: drones
    });
  });
  //   drones.forEach((drones) => {
  //     console.log(' --> drones: ', drones.name);
  //   });
  // });
});

router.get('/new', (req, res, next) => {
  // Iteration #3
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
