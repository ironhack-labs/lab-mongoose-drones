const express = require('express');

// require the Drone model here
require("../models/drone-model");

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  DroneModel
  .find()
  .exec()
  .then((droneResults) => {
    // create a local variable for the view to access the DB results
    res.locals.listOfDrones = droneResults;
    res.render("drones/index");
  })
  .catch((err) => {
    next(err);
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
