const express = require('express');

const DroneModel = require('../models/drone.js');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  DroneModel.find((err, allDrones) => {
    if(err) {
      next(err);
      return;
    }

    res.locals.drones = allDrones;

    res.render('drones/index.ejs');

  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrones = new DroneModel({
    droneName: req.body.droneName,
    propellers: req.body.dronePropellers,
    maxSpeed: req.body.droneMaxSpeed
  });

  theDrones.save((err) => {
    if (err) {
      //skip to the error handlr middleware
      next(err);
      return;
    }

      // STEP #3 redirect
      //ALWAYS redirect after a succesful POST to avoid resubmitting
      res.redirect('/drones');
      // you can only redirect to a URL
  });


});

module.exports = router;
