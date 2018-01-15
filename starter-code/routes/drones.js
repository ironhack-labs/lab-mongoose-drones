const express = require('express');

// require the Drone model here
const Drone = require("../models/drone.model.js")

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}).then((drones) => {
    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new', {drone: new Drone()})
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneData = req.body;
  const newDrone = new Drone(droneData);
  newDrone.save().then((drone) => {
    res.redirect('/drones');
  })
});

router.get('/edit/:id', (req, res, next) => {
  Drone.findById(req.params.id).then((drone) => {
    res.render('drones/new', {
      drone: drone
    });
  });
});

router.post('/:id', (req, res, next) => {
  // Iteration #3
  const droneId = req.params.id;
  const updates = {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
  };
  Drone.findByIdAndUpdate(droneId, updates).then((drone) => {
    res.redirect('/drones');
  });
});

router.post('/delete/:id', (req, res, next) => {

  const droneId = req.params.id;

  Drone.findByIdAndRemove(droneId).then((drone) => {
    return res.redirect('/drones');
  });
});

module.exports = router;