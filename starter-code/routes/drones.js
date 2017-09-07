const express = require('express');
const Drone = require('../models/Drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) { return next(err); }

    res.render('drones/index', {
      title:'Lista de drones',
      drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new',{title:'Add a drone'});
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
      droneName: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
  };

  // Create a new Drone with the params
  const newDrone = new Drone(droneInfo);
  newDrone.save( (err) => {
    if (err) { return next(err); }
    // redirect to the list of drones if it saves
    return res.redirect('/drones');
  });
});

module.exports = router;
