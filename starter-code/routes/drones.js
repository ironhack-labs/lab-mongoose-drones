const express = require('express');

const DroneModel = require('../models/drone.js');

const router = express.Router();



router.get('/drones', (req, res, next) => {
  DroneModel.find((err, allDrones) => {
    console.log('You got it!');
    console.log(allDrones);
    if (err) {
      next(err);
      return;
    }
    res.locals.listOfDrones = allDrones;
    res.render('drones/index.ejs');
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  const theDrone = new DroneModel ({
    droneName: req.body.droneName,
    propellers: req.body.propeller,
    maxSpeed: req.body.speed,
  });

    theDrone.save((err) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect('/drones');
  });
});

module.exports = router;
