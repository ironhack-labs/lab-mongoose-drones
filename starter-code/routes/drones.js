const express = require('express');
const Drone = require('../models/modelDrone');
// require the Drone model here

const router = express.Router();

router.get('/', function(req, res, next) {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }
    res.render('drones/index', {
      drones: drones
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render("drones/new");
});

router.post('/', (req, res, next) => {
  const drone = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  const newDrone= new Drone(drone);
  newDrone.save( err =>{
    if (err ) {return next(err)}
    return res.redirect("/drones")

  })
});

module.exports = router;
