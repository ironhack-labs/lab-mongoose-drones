const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');
const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2  
  Drone.find({}, (err, drones)=>{
    if(err){
      console.log('Error fetching from DB');
      return next(err);
    } else {
      console.log(drones.length);
      const data = {
        drones : drones
      };
      res.render('drones/index', data);
    }
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3  
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    name : req.body.name,
    propellers : req.body.propellers,
    maxSpeed : req.body.maxSpeed
  };

  const newDrone = new Drone(droneInfo);
  
  newDrone.save((err)=>{
    if(err){
      console.log('Error saving new drone...')
      return next(err);
    } else {
      console.log('Redirecting...')
      res.redirect('/drones');
    }
  });
});

module.exports = router;
