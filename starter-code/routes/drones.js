const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if(err) { next(err);} 
    res.render('drone', { 
      drones
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
