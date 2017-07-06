const express = require('express');
// require the Drone model here
const Drone = require('../models/Drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, e) => {
    if(err) {
      return next(err);
    } else {
      console.log(e);
      res.render('drones/index', {
        title: 'Drones Holi',
        drones: e
      });
    }
  });
});

router.get('/drones/new', (req, res, nex) => {
  // Iteration #3
  Drone.find({}, (err, e) => {
    if(err) {
      return next(err);
    } else {
      console.log(e);
      res.render('drones/new', {
        title: 'Drones Holi',
        drones: e
      });
    }
  });
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  console.log("llegoooo");
  let {droneName, propellers, maxSpeed} = req.body;
  let updates = {
    droneName,
    propellers,
    maxSpeed
  };
  let e = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  });
  e.save((err, e) => {
    if(err) { console.log(err) };
    res.redirect(`/drones`);
  })
});

module.exports = router;
