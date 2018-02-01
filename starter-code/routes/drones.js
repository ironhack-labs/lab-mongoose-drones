const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, result) => {
    if(err){
      next();
    }
    else{
      let drones = {
        droneName : result.name,
        droneProp : result.propeller,
        droneMaxSpeed : result.maxSpeed,
        drones : result
      }

      res.render('drones/index', drones)
    }

  })
});


router.get('/new', (req, res, next) => {
  // Iteration #3
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
