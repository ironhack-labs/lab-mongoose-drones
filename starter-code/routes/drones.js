const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
    Drone.find({}, (err, result) => {
      if (err) { return next(err);}

      res.render('./drones/index', {
        drones: result
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
