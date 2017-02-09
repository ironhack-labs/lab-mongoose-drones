/*jshint esversion: 6*/

const express = require('express');
const router = express.Router();
const Drone = require('../models/drone');


router.get('/drones', (req, res, next) => {
  Drone.find({},function (err,drones){
    if (err) return next(err)
    res.render('drones/index', { drones, title: "Drones" });
  });
});



router.get('/drones/new', (req, res, next) => {
  // Iteration #4
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
});


router.get('/drones/:id', (req, res, next) => {

   let droneId = req.params.id;
   console.log('we are in /drones/id');
   Drone.findById(droneId, (err, droneDetails)=>{
     if (err) { return next(err); }
     res.render('drones/show', {droneDetails});
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
