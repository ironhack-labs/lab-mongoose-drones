const express = require('express');
const Drone = require('../models/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err, drones) => {
    if (err) {
      next(err);
      return;
    }

      // display views/products/index.ejs
    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new', {

  });
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
});


router.get('/drones/:id', (req, res, next) => {
    // Iteration #3
let droneId = req.params.id;

Drone.findById({_id: id}, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.render('drones/show', {
      drone: result
    });
  });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
