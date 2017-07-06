const express = require('express');
const Drone = require('../models/Drone')
// require the Drone model here

const router = express.Router();

// CRUD => R: Retrieve All
router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drone) => {
    res.render('drones/index', {
      title: 'DRONES',
      drones: drone
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new', {
    title: 'DRONES'
  });
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  let drone = new Drone({
    droneName  : req.body.droneName,
    propellers : req.body.propellers,
    maxSpeed   : req.body.maxSpeed
  });
  drone.save((err, obj) => {
    res.redirect('/drones');
  });
});

module.exports = router;
