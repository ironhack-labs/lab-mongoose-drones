const express = require('express');
const Drones = require('../models/Drones').Drone;
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drones.find({}, (error, result) => {
    if (error) {
      next(error);
    } else {
      const data = {
        drones: result
      }
      res.render('drones', data);
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
