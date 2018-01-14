const express = require('express');

// require the Drone model here

const Drone = require('../models/drone')
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("Displaying drones");
  Drone.find({}).then((drones) => {
    res.render('drones/index', {
      drones: drones,
      title: 'Drone Database'
    });
  });
});


router.get('/new', (req, res, next) => {
  res.render('drones/new', {
    drone: new Drone(),
    title: 'Add a new drone to the database'
  });
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneData = req.body;

  const newDrone = new Drone(droneData);

  newDrone.save().then((drone) => {
    res.redirect('/drones');
  })
});

module.exports = router;
