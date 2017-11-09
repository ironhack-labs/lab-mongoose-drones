const express = require('express');
const router = express.Router();
const Drone = require('../models/drone.js')

// require the Drone model here
router.get("/drones", (req, res, next) => {
  res.render("drones/new");
});




router.get('/drones', (req, res, next) => {
  // Iteration #2 
  Drone.find({}, (err, drones) => {
    res.render('drones/index', {
       drones: drones
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
