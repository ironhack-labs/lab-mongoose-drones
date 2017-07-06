/*jshint esversion: 6*/
const express = require('express');
const Drone = require('../models/drone');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, function callback(err, droneData) {
    if (err) { next(err); }
    res.render('drones/index', droneData);
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
