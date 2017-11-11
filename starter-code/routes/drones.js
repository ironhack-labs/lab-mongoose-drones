const express = require('express');
const Drone=require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({},(err,data)=>{
    if(err){
      return next(err);
    }
    res.render('drones/index',{result : data});
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('/drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const DroneInfo= {
    droneName: req.body.droneName,
    propellers : req.body.propellers,
    maxSpeed : req.body.maxSpeed
  };
  const newDrone =new Drone (droneInfo);
  newDrone.save((err)=>{
    if(err){
      return next(err);
    }
    return res.redirect('/drones');
  });
});

module.exports = router;
