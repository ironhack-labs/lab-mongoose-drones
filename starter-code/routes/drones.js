const express = require('express');
const router = express.Router();

const Drone = require('../models/drone');
// require the Drone model here




router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {
      next(err);
    } else {
      console.log(drones);
      res.render('drones/index', { drones })
    }
  })
});



router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
