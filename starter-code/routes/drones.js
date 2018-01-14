const express = require('express');
const Drones = require('../models/drone.model');

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drones.find({}).then((drones) => {
    console.log(drones);
    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new',{
    drone: new Drones()
  });
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const data = req.body;
  console.log(data);
  const newDrone = new Drones(data);
  newDrone.save().then((drone) => {
    res.redirect('/drones');
  });
});

module.exports = router;
