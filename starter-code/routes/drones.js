/*jshint esversion: 6*/
const express = require('express');

// require the Drone model here

const router = express.Router();
const drone = require('Drone');

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
