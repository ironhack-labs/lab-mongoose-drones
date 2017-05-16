const express = require('express');

const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err, dronesList) => {
      if(err) {
          next(err);
          return;
      }
      res.render('drones/drone-list-view.ejs', {
        drones: dronesList,
      });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new.ejs');
});

router.post('/drones/new', (req, res, next) => {
    const newDrone = new Drone({
        droneName: req.body.droneName,
        propellers: req.body.propellers,
        maxSpeed: req.body.maxSpeed,
        droneImg: req.body.droneImg
    });
    newDrone.save((err) => {
        if (err) {
            next(err);
            return;
        }

        res.redirect('/drones');
    });
});

module.exports = router;
