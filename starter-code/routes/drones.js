const express = require('express');
const Drones = require('../models/drone.model');

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drones.find({}).then((drones) => {
    console.log(drones);
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
