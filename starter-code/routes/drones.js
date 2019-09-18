const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();

router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {return next(err) }

    res.render('drones/index', {
        drones: drones
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
    // Take the params and translate them into a new object
    const droneInfo = {
      name: req.body.name,
      price: req.body.propellers,
      imageUrl: req.body.maxSpeed,
  }

  // Create a new Product with the Params passed
  // in from the "/products/new" form
  const newDrone = new Drone(droneInfo);

  newDrone.save( (err) => {
      // Error Handling
      if (err) { return next(err) }

      return res.redirect('/drones');
  });
});

module.exports = router;
