const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find((err, droneResults) =>{
    if (err){
      next(err);
      return;
    }
    res.render('drones/drone-list-view.ejs', {dronesAndShit: droneResults});
  });
});



router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new-drone-view.ejs");
});






router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });

  theDrone.save((err) =>{
    if(err){
      // use next() to skip to the ERROR PAGE
      next(err);
      return;
    }

    res.redirect('/drones');
        // you can ONLY redirect to a URL 🌍
  });
});

module.exports = router;
