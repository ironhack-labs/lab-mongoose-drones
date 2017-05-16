/* jshint esversion:6 */
const express = require('express');

// require the Drone model here
const Drones = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
    Drones.find({},function(err,drones){
      if (err) return next(err);
      res.render('drones/index',{drones});

    });

  });



router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
