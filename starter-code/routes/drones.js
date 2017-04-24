const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.js');

const router = express.Router();

// ===   Render a list of Drones and sends ================
//====   the list with dronesList variable ================
//====    to the view =====================================
router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find((err, droneList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('drones/index.ejs', {
      dronesList: droneList
    });
  });
});

//=== Get the and render  the view for   ================
//======== the form of new drones   =====================
router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs', {
      
    });
});


//=== Post the the form and save the data   =======
//======== in the data base   =====================
router.post('/drones', (req, res, next) => {

  // Iteration #3
    console.log( req.body );
  const newDroneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }
const newDrone = new Drone(newDroneInfo);
newDrone.save( (err) => {
    if (err) { return next(err) }
    // redirect to the list of drones if it saves
    return res.redirect('/drones');
  });
});

module.exports = router;
