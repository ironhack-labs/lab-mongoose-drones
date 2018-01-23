const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();

//No entra en /drones
router.get('/', (req, res, next) => {
  console.log("I'm at drones list");
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }
    
    res.render('drones/index', {
      drones
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

// Create a new Product with the params
  const newDrone = new Drone(droneInfo);

  newDrone.save( (err) =>{
    if(err) { return next(err) }
    return res.redirect('/drones');
  });
});

module.exports = router;
