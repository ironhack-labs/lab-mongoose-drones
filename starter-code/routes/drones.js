const express = require('express');

const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err, droneList) => {
    if(err){
      next(err);
      return;
    }
    res.render('drones/index.ejs', {
    drones: droneList
    });
  });
});


router.get('/drones/new', (req, res, next) => {
    res.render('drones/new.ejs');
});

router.post('/drones/new', (req, res, next) => {
  const theDrone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });
  theDrone.save((err) => {
    if(err){
      next(err);
      return;
    }

    res.redirect('/drones');
  });
});

module.exports = router;
