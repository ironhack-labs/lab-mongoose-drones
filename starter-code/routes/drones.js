const express = require('express');
const Drone = require('../models/drone.js');


const router = express.Router();


router.get('/drones', (req, res, next) => {
    Drone.find({}, (err, drones) => {
      if (err) {
        console.log(err);
      } else {
        res.render('drones/index', drones);
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
