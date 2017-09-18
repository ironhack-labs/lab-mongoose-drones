const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();

// Iteration #2

router.get('/drones', (req, res, next) => {
  const droneNAme = req.params.droneNAme;

  Drone.findByName(droneNAme, (err, drone) => {
    if (err) { return next(err); }
    res.render('drones/show', { drone: drone });
  });

});
router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
