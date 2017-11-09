const express = require('express');
const Drones = require('../models/drones');

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drones.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  //if (err) { return next(err) }
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
  // Take the params, and translate them into a new object
  const droneInfo = {
      droneName: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
  };

  // Create a new Product with the params
  const newDrone = new Drones(droneInfo);

  newDrone.save( (err) => {
    if (err) { return next(err) }
    // redirect to the list of products if it saves
    return res.redirect('/drones');
  });

});

module.exports = router;
