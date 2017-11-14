const express = require('express');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, p) => {
    if (err) {
      next();
    } else {
      res.render('drones/index', {
        title: 'Drone shop',
        drones: p
      });
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  let objDrone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });
  objDrone.save((err, obj) => {
    if (err) {
      next();
    } else {
      res.redirect('/drones');
    }
  });
});

module.exports = router;
