const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();

router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {next(err);}
    console.log(drones)
    res.render('drones/index', {drones});
  })
});

router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed }, (err, drone) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/drones');
    }
  });
});

module.exports = router;
