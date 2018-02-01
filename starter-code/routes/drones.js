const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require('../models/drone');


router.get('/', (req, res, next) => {
  // Iteration #2
  
  Drone.find({},(err, droneArray) => {
    if (err) {
      return next(err);
    } else {
      let droneObject = {arrayOfDrones: droneArray};
      res.render('drones/index', droneObject);
    }
  });
});

router.get('/new', (req, res, next) => {
  // Iteration #3
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
