const express = require('express');
const router = express.Router();

// require the Drone model here
const droneController = require('../controllers/drones.controller')

router.get('/drones', droneController.show);


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;