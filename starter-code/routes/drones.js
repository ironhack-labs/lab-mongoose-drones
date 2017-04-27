const express = require('express');
const Drone   = require('../models/drone-model.js');
const router  = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err, droneList)=>{
        if(err){
          next(err);
          return;
        }
      res.render('drones/index.ejs',{
        drones: droneList
      });
    });
  });

router.post('/drones/new', (req, res, next)=>{
    const theDrone= new Drone({
      name: req.body.droneName,
      propellar: req.body.propellar,
      maxSpeed:req.body.maxSpeed
    });

    theDrone.save((err)=>{
       if (err) {
         next(err);
         return;
       }
       res.redirect('/drones');
    });
  });


  router.get('/drones/new', (req, res, next) => {
    // Iteration #3
    res.render('drones/new-drone.ejs');
  });


  module.exports = router;
