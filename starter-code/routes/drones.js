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
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // let name = req.body.name;
  // let propellers = req.body.propellers;
  // let maxSpeed = req.body.maxSpeed;

  // res.send(`Name: ${name}, Propellers: ${propellers}, Max Speed: ${maxSpeed}`);

  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  // Create a new Product with the params
  const newDrone = new Drone(droneInfo);

  newDrone.save((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/drones');
  });
});

module.exports = router;
