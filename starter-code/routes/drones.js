/*jshint esversion:6*/

const express = require('express');
const router = express.Router();
const Drone = require('../models/drone');


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err); }
    res.render('drones/main', {
      drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/add');
});

router.post('/drones', (req, res, next) => {
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  const newDrone = new Drone(droneInfo);
  newDrone.save((err) => {
    if (err) { return next(err); }
    return res.redirect('/drones');
  });
});

module.exports = router;
