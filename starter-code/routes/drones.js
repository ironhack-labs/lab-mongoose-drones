const express = require('express');
const Drone = require ('../models/drone')
// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {
      return next(error);
    }
    res.render('drones/index', {
      drones: drones
    })
  })
});




router.get('/new', (req, res, next) => {
  res.render('drones/new');
  // Iteration #3
});

router.post('/', (req, res, next) => {
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  // Iteration #3
  const newDrone = new Drone (droneInfo);

  newDrone.save((err) => {
    if (err) {return next (err)}

    return res.redirect('/drones');
  })
});

module.exports = router;
