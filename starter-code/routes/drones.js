/* jshint esversion: 6 */

const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();

router.get('/drones/new', (req, res, next) => {
  // Iteration #4
  res.render('drones/new');
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
  droneId = req.params.id;
  console.log('in post delete');
  Drone.findByIdAndRemove(droneId, (err, doc) =>{
    if (err) return next(err);
    console.log('deleted: ', doc);
    res.redirect('/drones');
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
  droneId = req.params.id;
  Drone.findById(droneId, (err, drone) =>{
    if (err) return next(err);
    res.render('drones/edit', {drone});
  });
});

router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
  let droneId = req.params.id;
  console.log('we are in /drones/id');
  Drone.findById(droneId, (err, droneDetails)=>{
    if (err) { return next(err); }
    res.render('drones/show', {droneDetails});
  });
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
  const droneId = req.params.id;
  const {droneName, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(droneId, {droneName, propellers, maxSpeed}, (err, drone) => {
    if (err) return next(err);
    res.redirect(`/drones/${droneId}`);
  });
});

router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {return next(err);}
    res.render('drones/index', {drones});
  });
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
  const {droneName, propellers, maxSpeed} = req.body;
  const newDrone = new Drone({droneName, propellers, maxSpeed});

  newDrone.save(function (err){
    if (err) return next(err);

    //saved
    res.redirect('/drones');
  });
});

module.exports = router;
