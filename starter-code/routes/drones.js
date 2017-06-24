const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  const drones = Drone.find({}, (err, drones) => {
    res.render('drones/index', {
       drones: drones
    });
  });
});

router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  const droneInfo = {
      droneName: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
  };

 // Create a new Drone with the params
  const newDrone = new Drone(droneInfo);
  newDrone.save( (err) => {
    if (err) { return next(err) }
    // redirect to the list of products if it saves
    return res.redirect('/drones');
  });
});
// Edit a Drone
router.get('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;

 Drone.findById(droneId, (err, drone) => {
    if (err) { return next(err); }
    res.render('drones/edit', { drone: drone });
  });
});

router.post('/drones/:id/update', (req, res, next) => {
  const droneId = req.params.id;
  console.log(droneId);
 /*
   * Create a new object with all of the information from the request body.
   * This correlates directly with the schema of Drone
   */
  const updates = {
      droneName: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
  };

 Drone.findByIdAndUpdate(droneId, updates, (err, drone) => {
    if (err){ return next(err); }
    return res.redirect('/drones');
  });
});

// Delete a Drone
router.get('/drones/:id/delete', (req, res, next) => {
  const droneId = req.params.id;

  Drone.findByIdAndRemove(droneId, (err, drone) => {
     if (err){ return next(err); }
     return res.redirect('/drones');
   });
});

module.exports = router;
