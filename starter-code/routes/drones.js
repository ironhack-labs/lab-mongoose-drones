const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone=require('../models/drone');

router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({},(err,drones)=>{
    if(err){
      return next(err);
    }
    res.render('drones/index',{
      drones:drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const droneInfo ={
    droneName:req.body.droneName,
    propellers:req.body.propellers,
    maxSpeed:req.body.maxSpeed
  }
  const newDrone = new Drone(droneInfo);
  newDrone.save((err)=>{
    if(err){
      return next(err)
    }
    return res.redirect('/drones');
  })
});



module.exports = router;
