const express = require('express');

// require the Drone model here
const Caballito = require("../models/Drone.js");


const router = express.Router();


router.get('/', (req, res, next) => {
// Iteration #2
  Caballito.find({}, (err, result) => {
    res.render('drones/index', {result: result})
    console.log(result)
  })
  .catch((err) => {
    console.log(err);
    next();
  })
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new', {})
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const newDrone = new Caballito ({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  });
  newDrone.save();
  res.send("added!")
  
  .catch((err) => {
    console.log(err);
    next();
  })
});

module.exports = router;
