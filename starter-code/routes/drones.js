const express = require('express');
// require the Drone model here
const Drones = require('../models/Drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drones.find({}, (err, e) => {
    if(err) {
      return next(err);
    } else {
      res.render('index', {
        title: 'Drones Market'
      });
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
