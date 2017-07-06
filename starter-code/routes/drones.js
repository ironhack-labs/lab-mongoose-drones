const express = require('express');
const Drone = require('../models/Drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, dr) => {
    if (err) {
      next();
      return;
    } else {
      obj = {
        drones: dr
      }
      res.render('drones/index', obj);
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new', {});
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  console.log(req.body);
  let {
    dronName,
    propellers,
    maxSpeed
  } = req.body;
  let props = {
    dronName,
    propellers,
    maxSpeed
  };
  var newDrone = new Drone(props);
  newDrone.save((err, obj) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect('/drones');
    }
  })
});

module.exports = router;
