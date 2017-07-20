const express = require('express');
const Drone = require('../models/drone')

const router = express.Router();


router.get('/drones', (req, res, next) => {

  Drone.find({}, (err, drones) => {
    if (err) {
      next(); return;
    } else {
    res.render('drones/index', {drones});
    }
  })

});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new')
});

router.post('/drones', (req, res, next) => {

  // if (err) {
  //   next(); return;
  // } else {

    const {droneName, propellers, maxSpeed} = req.body;
    const newDrone = new Drone({droneName, propellers, maxSpeed});

    newDrone.save((err) => {
      if (err) {
        console.log('Dang, drone NOT added.');
      } else {
        console.log('Drone.');
        res.redirect('/drones');
      }

    });
  // }

});

module.exports = router;
