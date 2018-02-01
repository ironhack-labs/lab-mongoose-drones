const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, data) => {
    if (err) {
      next();
      return;
    }
    
    res.render('drones/index', {drones: data} );

 
    // mongoose.connection.close();
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  // Iteration #3
  let droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  let newDrone = new Drone(droneInfo);
  newDrone.save((err)=> {
    if (err) {
      next();
      return;
    }
    res.redirect('drones');
  })


});

module.exports = router;
