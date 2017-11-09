const express = require('express');
// require the Drone model here
const Drone = require("../models/drone");

const router = express.Router();


router.get('/drones', (req, res, next) => {

Drone.find({}, (err, drones) => {
  if(err){ return next(err);}

  res.render("drones/index", {
  foo: drones
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
