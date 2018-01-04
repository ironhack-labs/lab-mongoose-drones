const express = require('express');
const router = express.Router();

const Drone = require('../models/drone.js')

router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {
      console.error(err);
    }
    res.render('drones/index', {
      title: 'Dronelist',
      drones,
    });
  })
});


router.get('/new', (req, res, next) => {
  res.render('drones/new', {
    title: 'New',
  });
});

router.post('/', (req, res, next) => {
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  const newDrone = new Drone(droneInfo);
  newDrone.save((err) => {
    if (err) {
      console.error(err);
    }
    return res.redirect('drones');
  })
});

module.exports = router;