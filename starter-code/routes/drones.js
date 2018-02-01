const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone');
// require the Drone model here

router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find().exec((err, drones) => {
    if (err) {return next,(err)}
    res.render('drones/index', {
      drones: drones
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
