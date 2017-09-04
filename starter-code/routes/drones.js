const express = require('express');

// require the Drone model here
const DroneModel = require('../models/drones.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {

  DroneModel.find((err,drones) => {
        if (err) {
          next(err);
          return;
        }
        console.log(drones);
        res.locals.drones = drones;

        res.render('drones/index.ejs');
    });

});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const drone = new DroneModel({
      droneName: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
  });

  drone.save((err) => {

        if (err) {

            next(err);

            return;

        }

        // STEP #3 redirect
        // ALWAYS redirect after a successful to POST to avoid resubmitting
        res.redirect('/drones');
          // You can only redirect to a URL
    });
});

module.exports = router;
