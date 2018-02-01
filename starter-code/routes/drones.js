const express = require('express');
const mongoose = require('mongoose');
const Drone = require('../models/Drone');

mongoose.connect('mongodb://localhost/drones-dev').then(() => console.log("Conectado!"));

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find(, (err, drones) => {
    if (err) {
      return next(err);
    } else {
      res.render('drones/index', drones);
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
