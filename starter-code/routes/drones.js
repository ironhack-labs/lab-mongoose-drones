const express = require('express');

const Drone = require('../models/drone.js')
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err,droneArray) => {
      if(err) {
        next(err);
      } else {
        console.log(droneArray);
        res.render('drones/index', {title: "Drone's list", droneArray})

      }
  })
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new',{title:"Drone's factory"});

});

router.post('/drones', (req, res, next) => {
  const newDrone= new Drone( {
    droneName:req.body.droneName,
    propellers:req.body.propellers,
    maxSpeed:req.body.maxSpeed,
  });

  newDrone.save( (err)=> {
    if(err) {
      next(err);
    } else {
      res.redirect('/drones');
    }
  })
  
});

module.exports = router;

