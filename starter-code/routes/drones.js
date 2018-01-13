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
  res.render('drones/new')
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneData = req.body;

  const newDrone = new Drone(droneData);

  newDrone.save().then((drone) => {
    //res.send("hola");
    res.redirect('/drones');
  })
});

module.exports = router;