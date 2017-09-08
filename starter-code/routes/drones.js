const express = require('express');

// require the Drone model here

const Drone = require('../models/Drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
      if (err) {
        return next(err);
      }
      res.render('drones/index', {
        array: drones,
        title: "lista"
      });
    }

  );
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3

  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const writtenDrone = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  const newDrone = new Drone (writtenDrone);
  newDrone.save ((err) => {
    if (err) { return next(err);}

    return res.redirect('/drones');
  });



});




module.exports = router;
