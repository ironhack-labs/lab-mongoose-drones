const express = require('express');

// require the Drone model here

const router = express.Router();
const Drones = require("../models/drone");

router.get('/', (req, res, next) => {
  // Iteration #2
  Drones.find({}, (err, drones) => {
    if (err) { return next(err);}

    res.render('drones/index', {
      title: "List of drones",
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneKey = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  const newDrone = new Drones(droneKey);
    newDrone.save((err) => {
        if (err) {
          console.error(err);
        }
        return res.redirect('/drones');
      });
});

module.exports = router;
