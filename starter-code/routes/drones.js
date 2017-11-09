const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (err, result) => {

    if (err) { return next(err)}
    res.render('./drones/index', {
      drones:result
    });
  });
});


router.get('/new', (req, res, next) => {
  res.render('./drones/new')
  console.log("MIRA AQUIII");
});

router.post('/drones', (req, res, next) => {
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  const newDrone = new Drone(droneInfo);

  newDrone.save((err) => {
    if (err) { return next(err) }
    return res.redirect('/drones');
  });
});

module.exports = router;
