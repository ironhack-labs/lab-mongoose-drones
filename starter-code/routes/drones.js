const express = require('express');
// require the Drone model here
const DroneModel = require('../models/droneModel.js');

const router = express.Router();


//List of drones
router.get('/drones', (req, res, next) => {
  // allDrones is an array of drones in the collection
  DroneModel.find((err, allDrones) => {
    if(err){
      next(err);
      return;
    }
    res.render('drones/index.ejs',{allDrones:allDrones});

  });
});


//Adding 'form'
router.get('/drones/new', (req, res, next) => {
  res.render('drones/new.ejs');
});

//When form added-
router.post('/drones', (req, res, next) => {

  //with DroneModel create new drone object
  //by parsing body "name" of input
  const newDrone = new DroneModel({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });
  newDrone.save((err)=>{
    if(err){
      next(err);
      return;
    }
    //redirecting to list
    res.redirect('/drones');
  });
});

module.exports = router;
