const express = require('express');
const Drone = require('../models/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err,drones)=>{

    if (err) {
      console.log(err);
    }else {
      res.render('drones/index', {drones: drones});

    }

  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  let newDrone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });
  newDrone.save((err,obj)=>{
    if (err) {
      console.log(err);

    }else {
      res.redirect('/drones');
    }

  });

});

module.exports = router;
