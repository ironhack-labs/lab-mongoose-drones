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
  res.render('./drones/drone-index.ejs',
  //this is the array that is going to be pass the results of
    //the find query above into the drone-index view
  { theDrones: allDronesList });

});
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('./drones/new-drone.ejs');
});

router.post('/drones/new', (req, res, next) => {
  // Iteration #3
  const theDrone = new Drone({
    //this value comes from the input form that is being posted...to the body
    //make sure that the key names match the key names of the DB
    droneName:         `${req.body.droneBrand} ${req.body.droneModel}`,
    dronePrice:        req.body.dronePrice,
    droneImg:          req.body.droneUrl,
    propellers:        req.body.droneProp,
    maxSpeed:          req.body.droneSpeed,
    droneDesc:         req.body.droneDescription
  });
  //save the new value to the db, unless there is an error... NEXT
  theDrone.save((err) => {
    if (err) {
      next(err);
      return;
    }
              //localhost:3000/drones
    res.redirect('/drones');
  });
});

module.exports = router;
