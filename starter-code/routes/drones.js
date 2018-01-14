const express = require('express');

const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({})
  .then((drones) => {
    res.render('drones/index', {
      drones: drones
    });
  }).catch((err) => {  // not sure if this is correct
    return next(err);
    });
});


router.get('/new', (req, res, next) => {
    res.render('drones/new');
});

router.post('/', (req, res, next) => {
  const droneData = req.body;
  const newDrone = new Drone(droneData);

  newDrone.save().then((drones) => {
    res.redirect('/drones');
  }).catch((err) => {  // not sure if this is correct
    return next(err);
    });
});

module.exports = router;
