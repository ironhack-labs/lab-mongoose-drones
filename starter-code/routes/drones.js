const express = require('express');
const Drone = require("../models/Drone.js")
// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  console.log('holaaa')
  res.render('drones/index')
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
