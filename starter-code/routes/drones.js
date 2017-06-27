const express = require('express');

// require the Drone model here
const DroneModel = require('../models/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  DroneModel.find((err, droneResults)=> {
      if (err){
      // use next() to skip to the ERROR PAGE
        next(err);
        return;
      }
      res.render('drones/index.ejs',
      {
        dronesList: droneResults
      });
  });
});




router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  const theDrone = new DroneModel({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed

  });

  theDrone.save((err) =>{
    if (err) {
      // If there was an error, use next() to skip to the ERROR PAGE.
      next(err);
      return;
    }

    //If saved successfully, redirect to a URL.
    // (redirect is STEP #3)
    res.redirect('/drones');
      // you can ONLY redirect to a URL

      // if you dont redirect, you can refresh and duplicate your data

  });
});

module.exports = router;
