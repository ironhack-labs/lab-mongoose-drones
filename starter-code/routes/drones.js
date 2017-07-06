const express = require('express');

const Drone = require('../models/drone')

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {
      next(err)
      return
    } 
  res.render('drones/index', { drones })
  })
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new')
});

router.post('/drones', (req, res, next) => {
  Drone.create(req.body, (err, data) => {
    if (err) {
      next(err)
      return
    }
  res.redirect('/drones')
  });
});

module.exports = router;


// const droneData = {
//   droneName: req.body.droneName,
//   propellers : req.body.propellers,
//   maxSpeed : req.body.maxSpeed
//   var Drone;
//   const drone = new Drone(droneData);
//   drone.save
