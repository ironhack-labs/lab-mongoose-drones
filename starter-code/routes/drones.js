const express = require('express');
const Drone = require('../models/drones');
// require the Drone model here

const router = express.Router();

console.log("reaching the file");
router.get('/drones', (req, res, next) => {
  // Iteration #2
  console.log("dronesView");
  Drone.find({}, (err, dronesIreceiveFromDb) => {
    if (err) {
      next(err);
    } else {
      res.render('drones/index', { drones:dronesIreceiveFromDb } );
    }
  })
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new");
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed   
  }

  const newDrone = new Drone( droneInfo )
  newDrone.save( (err) => {
  console.log('getting inside new save')
    if (err) {
      next(err);
    } else {
      res.redirect('drones')
    }
  })

});

module.exports = router;
