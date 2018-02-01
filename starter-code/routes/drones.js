const express = require('express');

// require the Drone model here
const drone = require('../models/drone');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Iteration #2
  drone.find({});
  res.render('index');
});

// router.get('/drones/new', (req, res, next) => {
//   // Iteration #3
// });

// router.post('/drones', (req, res, next) => {
//   // Iteration #3
// });

module.exports = router;
