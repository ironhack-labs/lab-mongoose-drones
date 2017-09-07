
const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();

//list
router.get('/', (req, res, next) => {
   Drone.find({}, (err, drones) => {
   	console.log(drones);
    res.render('drones/index', {
       drones: drones
    });
  });
});


router.get('//new', (req, res, next) => {
  res.render('drones/new');
});


//create
router.post('/', (req, res, next) => {
	// Take the params, and translate them into a new object
  // Iteration #3
  const droneInfo = {
      droneName: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
  };
  
  // Create a new Product with the params
  const newDrone = new Drone(droneInfo);

  newDrone.save( (err) => {
		if(err){
			next(err)
		} else {
			res.redirect('/drones');
		}
  });
});


router.post('/:id/delete', (req, res, next) => {
  const droneId = req.params.id;

  Drone.findByIdAndRemove(droneId, (err, drone) => {
    if (err){ return next(err); }
    return res.redirect('/drones');

  });

});

module.exports = router;
