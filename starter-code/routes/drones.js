const express = require('express');
// require the Drone model here
const Drone = require('../models/drone-model.js');
const router = express.Router();

// routers
router.get('/drones', (req, res, next) => {
  Drone.find((err, droneList) => {
    if (err) {
      next(err);
      return;
    }

    res.render('drones/drones-list-view.ejs', {
      drones: droneList
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/drones-new-view.ejs', {
  });
});

router.post('/drones', (req, res, next) => {
  const theDrone = new Drone({  
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  });

  theDrone.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/drones');
  });
});

module.exports = router;
