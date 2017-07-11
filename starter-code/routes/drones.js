
const express = require('express');
const router = express.Router();
const Drone = require('../models/drone');


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err){
      next(err);
    } else {
      console.log(drones);
      res.render("drones/index", {drones})
    }
  })
});


router.get('/drones/new', (req, res, next) => {
  res.render("drones/new");
});

router.post('/drones', (req, res, next) => {
  const dronesData = {
    droneName : req.body.droneName,
    propellers : req.body.propellers,
    maxSpeed : req.body.maxSpeed,
  }

const newDrone = new Drone(dronesData);
newDrone.save( (err) => {
    if(err) {
      return next(err)
    } else {
      res.redirect('/drones');
    }
  })
});

module.exports = router;
