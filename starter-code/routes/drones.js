const express = require('express');

const Drone = require('../models/drone');

const dronesRoute = express.Router();


dronesRoute.get('/drones', (req, res, next) => {
  Drone.find( (err, dronesList) => {
    if (err) {
      next(err);
      return;
    }

    res.render('drones/drones-view', {drones: dronesList});
  });
});


dronesRoute.get('/drones/new', (req, res, next) => {
  res.render('drones/new-drone-view');
});

dronesRoute.post('/drones/new', (req, res, next) => {
  const theDrones = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });

  theDrones.save( (err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/drones');
  });
});

module.exports = dronesRoute;
