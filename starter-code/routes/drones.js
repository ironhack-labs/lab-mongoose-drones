/*jshint esversion: 6*/
const express = require('express');
const Drone = require('../models/drone');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, function callback(err, droneData) {
    if (err) { next(err); }
    console.log(droneData);
    res.render('drones/index', {droneData});
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  const dronesInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  let bigBoy = new Drone(dronesInfo);
  bigBoy.save((err) => {
    if (err) { next(err); }
    else { res.redirect('/drones'); }
  });

});

module.exports = router;
