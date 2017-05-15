/*jshint esversion: 6*/

const express = require('express');

const router = express.Router();
var Drone = require('../models/drone');


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones)=> {
    if(err) { return next(err) ;}
    console.log(drones[0]._id);
    res.render('index', { title: 'Drones', drones:drones});
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new', {});
});

router.post('/drones/new', (req, res, next) => {
  const droneInfo ={
    droneName: req.body.name,
    propellers: req.body.prop,
    maxSpeed: req.body.max,
  };
  const newDrone = new Drone(droneInfo);
  newDrone.save((err) =>{
    if(err){return next(err) ;}
  return res.redirect('/drones');
});
});

router.get('/drones/edit/:id', (req, res, next) => {
  const droneId = req.params.id;
  Drone.findById(droneId, (err, drone) =>{
    if(err){ return next(err);}
    res.render('/drones');
  });
});

router.post('/drones/edit/:id', (req, res, next) => {
  const droneId = req.params.id;
  const droneInfo ={
    droneName: req.body.name,
    propellers: req.body.prop,
    maxSpeed: req.body.max,
  };
    Drone.findByIdAndUpdate(droneId, droneInfo)((err) =>{
    if(err){return next(err) ;}
  return res.redirect('/drones');
});
});

module.exports = router;
