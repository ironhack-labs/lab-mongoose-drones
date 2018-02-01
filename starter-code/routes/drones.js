const express = require('express');

// require the Drone model here

const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find()
  .then(dronesData => {

    // let droneInfo = dronesData.body

    res.render('drones/index', {dronesData})
  })
  .catch(err => {
    return next(err);
  })
});

router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
  let newDrone = {
    name: req.body.newdrone,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxspeed
  }

  const droneNew = new Drone(newDrone);

  droneNew.save((err) => {
    if (err){
      return next(err);
    } else {
      res.redirect('/drones');
    }
  })
});

module.exports = router;
