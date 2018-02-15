const express = require('express');

const Drone = require('../models/Drone.js')

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({},(err, response) => {
    droneArray = response
    res.render("drones/index", {drones: droneArray})
  }).catch( (err) => {
    next();
    console.log(err);
  })
});

router.get('/drones/new', (req, res, next) => {
  res.render('drones/drones_form')
  next();
});

router.post('/drones', (req, res, next) => {
  const newDrone = new Drone(
  { name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  })
  newDrone.save();
  res.send(`<h3>New Drone Added!!</h3><br><a href="/drones/drones">Go to list  ;)</a>`);
  next();
});

module.exports = router;
