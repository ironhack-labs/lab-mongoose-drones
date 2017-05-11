const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
     if (err) { return next(err) }

     res.render('drones/index', {
       listofdrones : drones
     });
   });
});

router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new')
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const droneInfo ={
    droneName : req.body.Nameinput,
    propellers : req.body.Propellersinput,
    maxSpeed : req.body.Maxspeedinput,
  };
 const newDrone = new Drone(droneInfo);

 newDrone.save( (err) => {
    if (err) {
      return next(err)
    }
    return res.redirect('/drones');
  });
});




module.exports = router;
