const express = require('express');

// require the Drone model here

const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find()
  .then(dronesData => {

    // let droneInfo = dronesData.body

    res.render('drones/index', {dronesData})
  })
  .catch(err => {
    return next(err);
  })
});

router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
