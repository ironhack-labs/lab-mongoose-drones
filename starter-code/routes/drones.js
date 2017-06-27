const express = require('express');

const DroneModel = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  DroneModel.find((err, droneResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render('./drones/index.ejs',
  { droneObjects: droneResults }
);
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('./drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
    const daDrone = new DroneModel({
      droneName: req.body.droneName,
      propellers: req.body.dronePropellers,
      maxSpeed: req.body.droneSpeed
    });
    daDrone.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/drones');
    });
});

module.exports = router;
