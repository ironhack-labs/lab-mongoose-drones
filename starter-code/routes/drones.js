const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones)=>{
    if (err){next (err)
    } else{
      res.render('drones/index', {drones: drones});
      }
    })
  });


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  console.log('heyoeuaish', req.body.droneName);
  const droneModel = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }

 const newDrone = new Drone(droneModel)
  newDrone.save( (err) => {  //saves the new drone to the database
    if (err) {
      next(err)
    }
    res.redirect('/drones') // refreshes the page with the new inputted object
  })
});

module.exports = router;
