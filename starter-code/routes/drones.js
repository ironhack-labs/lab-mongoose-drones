const express = require('express');
const Drone = require ('../models/drones');
const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({},(err, drones)=> {
    if (err){return next(err); }
    res.render('drones/drone-list', {
      title: 'Drone list',
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
