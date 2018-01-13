const express = require('express');

const Drone = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
