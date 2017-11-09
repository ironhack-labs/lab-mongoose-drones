const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone').Drone;

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {
      next(err);
    } else {
      // console.log(res);
      const data = {
        drones: drones
      }
      console.log(data)
      res.render('drones/index', data);
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
