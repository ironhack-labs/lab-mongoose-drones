const express = require('express');
const Drone = require('../models/Drone')
// require the Drone model here

const router = express.Router();

// CRUD => R: Retrieve All
router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, p) => {
    res.render('drones/index', {
      title: 'DRONES',
      drones: p
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
