/*jshint esversion:6*/
const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, function (err, drones) {
    if (err) return next(err);
    res.render('drones/index', {
      drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #4
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
});


router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
  const dronId = req.params.id;
  Drone.findOne({_id: dronId}, function (err, dronFound){
    if(err) return next(err);
    res.render('drones/show', {
      dronFound
    });
  });
});





router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
