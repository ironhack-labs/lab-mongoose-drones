const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.model');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}).then((drones) => {
    res.render('index', {
      drones: drones
    });
  });
  /*Call the Drone model's find method to retrieve all the drones.
If there's an error, call the route's next function and return.
If there isn't an error, render the drones/index view.
Pass the variable with the array of drones into the view.*/


});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
