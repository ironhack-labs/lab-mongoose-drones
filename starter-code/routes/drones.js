const express = require('express');

const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({})
  .then((drones) => {
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
