const express = require('express');
const router = express.Router();

const Drone = require('../models/drone');


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drone) => {
        if (err) {
            next(err);
        } else {
            console.log(drone);
            res.render('drones/index', {
                drone
            });
        }
    });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  const droneInfo = {
        droneName: req.body.droneName,
        propellers: req.body.propellers,
        maxSpeed: req.body.maxSpeed,
    };

    const newDrone = new Drone(droneInfo);

    newDrone.save((err) => {
        if (err) {
            return next(err)
        } else {
            res.redirect('/drones')
        }
    });
});

module.exports = router;
