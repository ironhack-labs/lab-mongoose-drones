const express = require('express');
// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({},(err, drones))=> {

  return next(err) : err ? res.render("drones/index")
  }
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  const dronesInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed : req.body.maxSpeed
  }
  // Iteration #3
});

module.exports = router;
