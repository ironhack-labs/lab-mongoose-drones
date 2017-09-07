const express = require('express');
const Drone = require('../models/Drone')
const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/drones_list', {
      title:'Drone List',
      drones: drones
    })
  })
});


router.get('/new', (req, res, next) => {
  res.render('drones/new', {
    title:'Add new drone'
  })
});

router.post('/', (req, res, next) => {
  const droneInfo = {
    droneName: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxspeed
  }

  const newDrone = new Drone(droneInfo)
  newDrone.save(err => {
    if (err) { return next(err) }
    return res.redirect('/drones')
  })
});

module.exports = router;
