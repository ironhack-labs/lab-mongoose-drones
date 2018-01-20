const express = require('express');

const Drone = require('../model/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err, droneBuild)=>{
    if(err){
      next(err);
      return;
    }
    console.log("Hi");
    console.log(droneBuild);
    // res.locals.droneBuild = droneBuild;
    res.render('drones/drones-index.ejs',{
      droneBuild: droneBuild
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  const addedDrone= new Drone({
      droneName: req.body.droneName,
      propellers: req.body.dronePropellers,
      maxSpeed: req.body.droneMaxSpeed,
    });

    addedDrone.save((err)=>{
      if (err){
      next(err);
      return;
      }
      res.redirect('/drones');

    });
});

module.exports = router;
