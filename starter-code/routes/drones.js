const express = require('express');
const Drone = require('../models/Drone');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find().exec((err, drones) => {
    if(err){
      return next();
    }
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
