const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {return next(err)}

    res.render('drones/index', {drones:drones});
  });
});

router.get('/new', (req, res, next) => {
  // Iteration #4
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #4
  const droneInfo = {
    droneName  : req.body.droneName,
    propellers : req.body.propellers,
    maxSpeed   : req.body.maxSpeed
  };
  const newDrone = new Drone(droneInfo);

  newDrone.save( (err)  => {
    if (err) {return next(err)}

    res.redirect('/drones');
  });
});


router.get('/:id', (req, res, next) => {
  // Iteration #3
  let droneId = req.params.id;
  Drone.findById(droneId, (err, drone) => {
    if (err) {return next(err)}
     res.render('drones/show', {drone});
  });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
