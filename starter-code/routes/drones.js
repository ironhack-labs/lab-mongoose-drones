const express = require('express');
const router = express.Router();
const Drones = require('../models/Drones');

// require the Drone model here


router.get('/', (req, res, next) => {
  // Iteration #2
  Drones.find({}, (err, drones) => {
    if(err){return next(err);}

    res.render('index', {
      drones: drones,
      title: 'My Drones are Fucking Awesome'
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
