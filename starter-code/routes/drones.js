/*jshint esversion: 6*/
const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require('../models/drone');


router.get('/drones', (req, res, next) => {
  // Iteration #2
    Drone.find({}, (err, drones) => {
    if (err) {
      next(err);
    } else {
      res.render('drones/index', { drones: drones });
    }
  });

});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  let drone = req.body;
  const newDrone = new Drone(drone);
  newDrone.save((err)=>{
    if(err){
      next();
    }
    res.redirect('/drones');
  });
});

module.exports = router;
