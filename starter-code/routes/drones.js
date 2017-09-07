const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if(err) { next(err);} 
    res.render('drones', { 
      drones
    });
	});
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new')
});

router.post('/drones', (req, res, next) => {
  let newDroneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }
  const newDrone = new Drone(newDroneInfo);
  newDrone.save ( (err)=> {
    if (err) {next(err);}
    else{
      res.redirect('/drones');
    }
  })
});

module.exports = router;
