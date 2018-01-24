const express = require('express');
const router = express.Router();
const Drone = require('../models/drones');

router.get('/', (req, res, next) => {
  Drone.find({}, (err, drone) => {
    if (err) {
      next(err);
    } else {
      res.render('drones/index', {drone});
    }
  });
});


router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.propellers,
  }

  Drone.create(newDrone, (err, docs) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/drones');
    }
  });
});

module.exports = router;



