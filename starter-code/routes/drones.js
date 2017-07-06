const express = require('express');

const Drone = require('../models/drone')

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {
      next(err)
      return
    } 
  res.render('drones/index', { drones })
  })
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
