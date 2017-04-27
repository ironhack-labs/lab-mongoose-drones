const express = require('express');

// require the Drone model here
const Drone = require('../models/drone-model.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find((err, allDronesList) => {
    //first lets handle the first argument, the error
    if (err) {
      next(err);
      return;
    } //all we do is go to the next one if there is an error

  //if there isn't an error, woooopty dooo, render the page that the user
  //wanted to 'get'
  res.render('/drones/drone-index.ejs',
  //this is the array that is going to be pass the results of
    //the find query above into the drone-index view
  { theDrones: allDronesList });

});
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
