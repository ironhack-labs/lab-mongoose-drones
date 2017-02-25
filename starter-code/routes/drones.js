const express = require('express');
const Drone = require('../models/drones.js');
const router = express.Router();



router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, {}, (err, drones) => {
    if (err) {
      next(err);
      return;
    }
    res.render('drones', {
      drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #4.5
  res.render('drones/new', {title: "Create New Drone"});
});

router.post('/drones', (req, res, next) => {
  // Iteration #4.6
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  const newDroneMagic = new Drone(droneInfo);
  newDroneMagic.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/drones');
  });

});


router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
