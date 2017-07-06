const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2
    Drone.find({},(err, drones) => {
        if (err) {
            next(err);
        } else {
            console.log('listing', drones);
            res.render('drones/index',{ drones });
        }
    });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
    const dronesInfo = {
        droneName: req.body.droneName,
        propellers: req.body.propellers,
        maxSpeed: req.body.maxSpeed
    }

    const newDrone = new Drone ( dronesInfo );
    newDrone.save((err) => {
        if (err) {
            console.log('error', err);
            next(err);
        } else {
            res.redirect('/drones'); 
        }
    });

});

module.exports = router;
