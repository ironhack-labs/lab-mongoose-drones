const express = require('express');
const Drones = require('../models/drones');

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drones.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
