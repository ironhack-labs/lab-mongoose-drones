const express = require('express');
const Drone = require('../models/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err,drones) => {
    if (err) {
      next(err);
      return;
    }
  res.render('drones/index', {
    drones:drones
    });
  });
});




router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  const theDrone = new Drone(droneInfo);

  theDrone.save((err, next) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/drones');
  });
});


router.get('/drones/:id', (req, res, next) => {
let droneId = req.params.id;
  Drone.findOne({_id: droneId}, (err,drones) => {
    if (err) {
      next(err);
      return;
    }
    res.render('drones/show', {
      drones:drones
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
