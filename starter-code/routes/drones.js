const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find((err, droneList) => {
    if(err) {
      next (err);
      return;
    }
    res.render('drones/index.ejs', {
      drones: droneList
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
