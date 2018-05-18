const express = require('express');
const Drone = require('../models/drone');


// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, xxx) => {
    if (err) { 
      return next(err) 
    }

    res.render('drones/index', {
      drones: xxx
    
    });
});
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
  }
  const newDrone = new Drone(droneInfo);

  newDrone.save( (err) => {
      if (err) { 
        return next(err) 
      }
      return res.redirect('/drones');
  });
});

module.exports = router;