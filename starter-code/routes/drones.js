const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone');
// require the Drone model here

router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find().exec((err, drones) => {
    if (err) {return next,(err)}
    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/new', (req, res, next) => {
  // Iteration #3
  const {name,propellers,maxSpeed} = req.body;
  const drone = new Drone({name,propellers,maxSpeed});
  drone.save( err => {
    if (err) { return next(err) }
    res.redirect('/drones');
  })
});

module.exports = router;
