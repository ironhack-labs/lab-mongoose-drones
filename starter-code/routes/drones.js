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


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
